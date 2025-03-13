import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/conf";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData || null);

  const submit = async (data) => {
    try {
      if (!userData?.$id) return;

      if (post) {
        const file = data.image[0]
          ? await appwriteService.uploadFile(data.image[0])
          : null;

        if (file) {
          appwriteService.deleteFile(post.featuredImage);
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      } else {
        const file = await appwriteService.uploadFile(data.image[0]);

        if (file) {
          const cleanData = {
            title: data.title,
            slug: data.slug,
            content: data.content,
            status: data.status,
            featuredImage: file.$id,
            userId: userData.$id,
          };

          const dbPost = await appwriteService.createPost(cleanData);
          if (dbPost) navigate(`/post/${dbPost.$id}`);
        }
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap gap-4 p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="w-full lg:w-2/3 space-y-4">
        <Input
          label="Title"
          placeholder="Enter the title"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug"
          placeholder="Auto-generated from title"
          {...register("slug", { required: true })}
          onInput={(e) =>
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            })
          }
        />
        <RTE
          label="Content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className="w-full lg:w-1/3 space-y-4">
        <Input
          label="Featured Image"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg shadow-md w-full"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-600" : undefined}
          className="w-full"
        >
          {post ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  );
}

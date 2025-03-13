import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="54oetejsj6e53dmu5ta3kgpecb0r7ppid2vdi3tifl78xh0t" // ✅ Your actual API key here
            initialValue={defaultValue}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | image media | code fullscreen",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background-color: #fff }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

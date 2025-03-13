import React, { useEffect, useState } from "react";
import { container, PostForm } from "../components";
import appwriteService from "../appwrite/conf";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <container>
        <PostForm post={post} />
      </container>
    </div>
  ) : null;
}

export default EditPost;

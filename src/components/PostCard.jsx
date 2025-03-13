import React from "react";
import appwriteService from "../appwrite/conf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="w-full mb-4 overflow-hidden rounded-lg">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-lg w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;

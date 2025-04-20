"use client";

import { useState } from "react";
import { likePost, unlikePost } from "@/app/api/auth/[...nextauth]/like"; // sesuaikan path API kamu

type PostItemProps = {
  id: number;
  content: string;
  likesCount: number;
  likedByUser: boolean;
};

const PostItem = ({ id, content, likesCount, likedByUser }: PostItemProps) => {
  const [liked, setLiked] = useState(likedByUser);
  const [likes, setLikes] = useState(likesCount);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Harus login dulu!");
      return;
    }

    setLoading(true);
    try {
      if (liked) {
        await unlikePost(id, token);
        setLiked(false);
        setLikes((prev) => prev - 1);
      } else {
        await likePost(id, token);
        setLiked(true);
        setLikes((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Gagal update like:", err);
      alert("Gagal update like!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border p-4 rounded-xl shadow mb-4 bg-white">
      <p className="text-base whitespace-pre-wrap break-words">
        {content.length > 300 ? content.slice(0, 300) + "..." : content}
      </p>

      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm text-gray-600">{likes} ❤️</span>
        <button
          onClick={handleLike}
          disabled={loading}
          className={`px-3 py-1 rounded text-white transition text-sm ${
            liked
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-500 hover:bg-gray-600"
          } disabled:opacity-50`}
        >
          {loading ? "..." : liked ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default PostItem;

"use client";
import React, { useState } from "react";

interface PostProps {
  post: {
    id: number;
    text: string;
    likes: number;
  };
  onLike: (id: number) => void;
  onEdit: (post: { id: number; text: string; likes: number }) => void;
  onDelete: (id: number) => void;
}

export default function Post({ post, onLike, onEdit, onDelete }: PostProps) {
  const [showFull, setShowFull] = useState(false);
  const isLong = post.text.length > 250;
  const displayedText =
    showFull || !isLong ? post.text : post.text.slice(0, 250);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <p className="whitespace-pre-wrap break-words">
        {displayedText}
        {isLong && !showFull && "..."}
      </p>
      {isLong && (
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-blue-500 text-sm mt-1"
        >
          {showFull ? "See less" : "See more"}
        </button>
      )}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onLike(post.id)}
          className="bg-pink-200 px-2 py-1 rounded hover:bg-pink-300"
        >
          ❤️ {post.likes}
        </button>
        <button
          onClick={() => onEdit(post)}
          className="bg-yellow-200 px-2 py-1 rounded hover:bg-yellow-300"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(post.id)}
          className="bg-red-200 px-2 py-1 rounded hover:bg-red-300"
        >
          🗑 Hapus
        </button>
      </div>
    </div>
  );
}
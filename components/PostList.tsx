"use client";
import React from "react";
import Post from "./Post";

interface PostType {
  id: number;
  text: string;
  likes: number;
}

interface PostListProps {
  posts: PostType[];
  onLike: (id: number) => void;
  onEdit: (post: PostType) => void;
  onDelete: (id: number) => void;
  loading?: boolean; // ✅ tambahkan ini
}

export default function PostList({
  posts,
  onLike,
  onEdit,
  onDelete,
  loading = false,
}: PostListProps) {
  if (loading) {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  if (posts.length === 0) {
    return <p className="text-center text-gray-500">Belum ada postingan.</p>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={onLike}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

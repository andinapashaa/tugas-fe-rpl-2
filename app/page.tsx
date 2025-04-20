"use client";
import React, { useState } from "react";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

interface Post {
  id: number;
  text: string;
  likes: number;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const addPost = (text: string) => {
    if (editingPost) {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === editingPost.id ? { ...p, text } : p
        )
      );
      setEditingPost(null);
    } else {
      const newPost: Post = {
        id: Date.now(),
        text,
        likes: 0,
      };
      setPosts([newPost, ...posts]);
    }
  };

  const likePost = (id: number) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  const deletePost = (id: number) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const editPost = (post: Post) => {
    setEditingPost(post);
  };

  const cancelEdit = () => {
    setEditingPost(null);
  };

  return (
    <main className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">📝 Mini Social</h1>
      <PostForm onSubmit={addPost} editingPost={editingPost} onCancelEdit={cancelEdit} />
      <PostList posts={posts} onLike={likePost} onEdit={editPost} onDelete={deletePost} />
    </main>
  );
}

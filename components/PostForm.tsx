"use client";
import React, { useEffect, useState } from "react";

interface PostFormProps {
  onSubmit: (text: string) => void;
  editingPost: { id: number; text: string } | null;
  onCancelEdit: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, editingPost, onCancelEdit }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingPost) {
      setText(editingPost.text);
    } else {
      setText(""); // Reset form saat selesai edit
    }
  }, [editingPost]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded"
        rows={4}
        placeholder="Tulis sesuatu..."
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded disabled:opacity-50"
          disabled={!text.trim()}
        >
          {editingPost ? "Update" : "Post"}
        </button>
        {editingPost && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="bg-gray-300 text-black px-4 py-1 rounded"
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
};

export default PostForm;

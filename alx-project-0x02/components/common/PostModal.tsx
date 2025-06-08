// components/common/PostModal.tsx
import React, { useState } from 'react';

type PostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
};

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-black">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full text-black border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="w-full border text-black p-2 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 text-black bg-gray-300 rounded hover:cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:cursor-pointer">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;

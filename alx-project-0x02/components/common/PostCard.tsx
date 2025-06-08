import React from 'react';
import {type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-md p-4 shadow-md mb-4 bg-white">
      <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <small className="text-gray-500">User ID: {userId}</small>
    </div>
  );
};

export default PostCard;

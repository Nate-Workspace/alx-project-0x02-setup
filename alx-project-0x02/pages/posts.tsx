import React from 'react';
import Header from '../components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        {/* other content */}
      </main>
    </>
  );
};

export default PostsPage;

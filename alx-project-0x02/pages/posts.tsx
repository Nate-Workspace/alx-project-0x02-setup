import React, { useEffect, useState } from 'react';
import PostCard from '../components/common/PostCard';
import { type PostProps } from '@/interfaces';
import Header from '../components/layout/Header';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data: PostProps[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))
        )}
      </main>
    </>
  );
};

export default PostsPage;

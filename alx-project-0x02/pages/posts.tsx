import React from 'react';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';
import Header from '../components/layout/Header';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {posts.length === 0 ? (
          <p>No posts available.</p>
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

// This function runs at build time
export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts: PostProps[] = await res.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default PostsPage;

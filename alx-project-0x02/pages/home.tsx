import React from 'react';
import Card from "@/components/common/Card";
import Header from '@/components/layout/Header';

const HomePage = () => {
  return (
    <div>
        <Header/>
    <div className="p-6 space-y-4">
      <Card title="Welcome to ALX" content="This is a reusable Card component." />
      <Card title="Next.js + Tailwind" content="Styled with Tailwind and built with Next.js." />
      <Card title="Dynamic Props" content="Pass in different content and reuse easily." />
    </div>
    </div>
  );
};

export default HomePage;

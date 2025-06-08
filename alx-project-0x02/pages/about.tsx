import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';
import React from 'react';

const About = () => {
  return (
    <div>
    <Header/>
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to the About Page</h1>
      <div className="space-x-4">
        <Button label="Small" size="small" shape="rounded-sm" />
        <Button label="Medium" size="medium" shape="rounded-md" />
        <Button label="Large" size="large" shape="rounded-full" />
      </div>
    </div>
    </div>
  );
};

export default About;

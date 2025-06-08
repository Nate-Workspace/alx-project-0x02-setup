// pages/index.tsx
import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <Header />
      <main className="p-6 text-center">
        <h2 className="text-2xl font-semibold">Welcome to the ALX Next.js Project</h2>
        <p className="mt-4 text-gray-600">You have successfully set up Next.js with TypeScript and Tailwind CSS.</p>
      </main>
    </>
  );
}

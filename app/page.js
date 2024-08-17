// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>My Personal Page</title>
        <meta name="description" content="Welcome to my personal page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to My Personal Page</h1>
        <p className="text-lg text-gray-700 mb-2">Hi, I'm Piotr, a Software Engineer.</p>
        <p className="text-lg text-gray-700">This is a simple personal page built with Next.js and Tailwind CSS.</p>
      </main>

      <footer className="mt-8">
        <p className="text-gray-500">© 2024 Piotr Brudny. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

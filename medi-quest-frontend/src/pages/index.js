import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    // Replace `backend_api_endpoint` with your Python backend endpoint.
    // Ensure that you have CORS configured on your backend to accept requests from this origin.
    const response = await fetch(`backend_api_endpoint/search?q=${query}`);
    const data = await response.json();
    // Handle the search results data.
    console.log(data);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-50 text-gray-800 px-4">
      <Head>
        <title>Medi-Quest Search Engine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mb-6">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">Medi-Quest</h1>
      </header>
      <main className="w-full max-w-lg">
        <form className="flex flex-col sm:flex-row w-full" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <input
            type="text"
            className="flex-1 px-6 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4 sm:mb-0 sm:rounded-r-none"
            placeholder="Search for medication..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="whitespace-nowrap bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none sm:rounded-l-none"
            type="submit" // Set the button type to submit for form submission
          >
            Search
          </button>
        </form>
      </main>
    </div>
  );
}

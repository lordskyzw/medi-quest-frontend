import Head from 'next/head';
import { useState } from 'react';
export default function Home() {
    return <h1>Hello World</h1>;
  }
  
// export default function Home() {
//   const [query, setQuery] = useState('');

//   const handleSearch = async () => {
//     // Replace `backend_api_endpoint` with your Python backend endpoint.
//     const response = await fetch(`backend_api_endpoint/search?q=${query}`);
//     const data = await response.json();
//     // Handle the search results data.
//     console.log(data);
//   };
//   return (
//     <div>
//       <Head>
//         <title>Medi-Quest Search Engine</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className="flex flex-col items-center justify-center min-h-screen p-4">
//         <div className="flex w-full max-w-md">
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
//             placeholder="Search for medication..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <button
//             className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-700 focus:outline-none"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

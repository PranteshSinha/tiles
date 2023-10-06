// src/components/SearchBox.tsx
"use client"

import React from 'react';
import { FormEvent, useState } from 'react'

// const SearchBox: React.FC = () => {
//   return (
//     <div className='flex justify-center w-60 h-10'>
//       <input type="text" placeholder="Paste or Enter image URL" />
//       <button>Search</button>
//     </div>
//   );
// };

// export default SearchBox;

// src/components/Search.tsx

const Search: React.FC = () => {
  // const [searchValue, setSearchValue] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(e.target.value);
  //   console.log(e.target.value);
  // };

  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form 
      className="flex flex-wrap justify-center w-60 h-10" 
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Paste or enter image URL"
        className="flex-1 min-w-[100px] w-full p-3 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none"
      />

      <button 
        type="submit" 
        className="bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
        disabled={searchPrompt === ''}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default Search;

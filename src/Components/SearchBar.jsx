import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) onSearch(username.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative flex items-center">
        <Search className="absolute left-4 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Enter a GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full pl-12 pr-32 py-3 bg-slate-900 border border-slate-700 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 px-5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all text-sm"
        >
          Analyze
        </button>
      </div>
    </form>
  );
}
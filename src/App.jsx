import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ProfileSummary from './components/ProfileSummary';
import LanguageChart from './components/LanguageChart';
import Suggestions from './components/Suggestions';

// PASTE YOUR GITHUB PERSONAL ACCESS TOKEN INSIDE THE QUOTES
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || ""; 

export default function App() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setProfile(null);
    setRepos([]);

    const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};

    try {
      const profileRes = await axios.get(`https://api.github.com/users/${username}`, { headers });
      const reposRes = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });
      
      setProfile(profileRes.data);
      setRepos(reposRes.data);
    } catch (err) {
      setError(err.response?.status === 404 ? "User not found!" : "API Error occurred. Check limits.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-tight">GitHub Project Analyzer</h1>
        <p className="text-center text-gray-400 mb-8">Enter any handle to unpack engineering metrics and custom build paths.</p>
        
        <SearchBar onSearch={handleSearch} />

        {loading && <div className="text-center text-blue-400 mt-12 animate-pulse">Analyzing profiles assets...</div>}
        {error && <div className="text-center text-red-500 mt-12 font-medium">{error}</div>}

        {profile && (
          <div className="mt-8 animate-fadeIn">
            <ProfileSummary profile={profile} repos={repos} />
            <div className="grid md:grid-cols-1 gap-6">
              <LanguageChart repos={repos} />
            </div>
            <Suggestions repos={repos} />
          </div>
        )}
      </div>
    </div>
  );
}
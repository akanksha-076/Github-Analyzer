import React from 'react';
import { Users, BookOpen, Star, GitFork } from 'lucide-react';

export default function ProfileSummary({ profile, repos }) {
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white mb-6">
      <div className="flex flex-col md:flex-row items-center gap-6 border-b border-slate-800 pb-6 mb-6">
        <img src={profile.avatar_url} alt={profile.name} className="w-24 h-24 rounded-full border-2 border-blue-500" />
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl font-bold">{profile.name || profile.login}</h2>
          <p className="text-gray-400 mt-1">{profile.bio || "This developer hasn't added a bio yet."}</p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {profile.followers} followers</span>
            <span>•</span>
            <span>{profile.location || "Remote"}</span>
          </div>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
          <BookOpen className="text-blue-500 w-6 h-6" />
          <div><p className="text-xs text-gray-400 uppercase">Public Repos</p><p className="text-xl font-bold">{profile.public_repos}</p></div>
        </div>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
          <Star className="text-yellow-500 w-6 h-6" />
          <div><p className="text-xs text-gray-400 uppercase">Total Stars</p><p className="text-xl font-bold">{totalStars}</p></div>
        </div>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
          <GitFork className="text-green-500 w-6 h-6" />
          <div><p className="text-xs text-gray-400 uppercase">Total Forks</p><p className="text-xl font-bold">{totalForks}</p></div>
        </div>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
          <BookOpen className="text-purple-500 w-6 h-6" />
          <div><p className="text-xs text-gray-400 uppercase">Gists</p><p className="text-xl font-bold">{profile.public_gists}</p></div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function Suggestions({ repos }) {
  // Determine top language
  const langMap = {};
  repos.forEach(repo => { if (repo.language) langMap[repo.language] = (langMap[repo.language] || 0) + 1; });
  const topLanguage = Object.keys(langMap).reduce((a, b) => langMap[a] > langMap[b] ? a : b, "JavaScript");

  // Mock recommendation dictionary
  const recommendations = {
    JavaScript: [
      { title: "Build a Next.js Markdown Blog", desc: "Perfect for JS developers trying to master Server Component structures." },
      { title: "Real-time Chat App with Socket.io", desc: "Level up your async frontend skills with dynamic event listeners." }
    ],
    Python: [
      { title: "Develop a Custom Data Visualizer", desc: "Leverage pandas and matplotlib to turn messy CSV files into beautiful UI dashboards." },
      { title: "Automated Web Scraper & API Provider", desc: "Gather real estate or retail analytics data safely using BeautifulSoup." }
    ],
    TypeScript: [
      { title: "Create an advanced CLI Automation Tool", desc: "Great for understanding rigorous typing rules inside node developer tools." }
    ]
  };

  const currentSuggestions = recommendations[topLanguage] || recommendations["JavaScript"];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="text-yellow-400 w-5 h-5" />
        <h3 className="text-lg font-bold">💡 Project Suggestions for your {topLanguage} profile</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {currentSuggestions.map((idea, index) => (
          <div key={index} className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-blue-400 mb-2">{idea.title}</h4>
              <p className="text-sm text-gray-400 mb-4">{idea.desc}</p>
            </div>
            <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-all font-medium">
              Start Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
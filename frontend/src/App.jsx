import { useState, useEffect } from "react";
import MemeCard from "./components/MemeCard";
import Shimmer from "./components/Shimmer";

export default function App() {
  const [memes, setMemes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // DARK MODE ENABLED BY DEFAULT

  // Enable dark mode on first load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Toggle dark mode (HTML <html> element)
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setDarkMode(!darkMode);
  };

  // Fetch memes
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        setMemes(data.data.memes);
        setFiltered(data.data.memes);
        setLoading(false);
      });
  }, []);

  // Search Filter
  useEffect(() => {
    const s = query.toLowerCase();
    setFiltered(memes.filter(m => m.name.toLowerCase().includes(s)));
  }, [query, memes]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 transition">

      {/* ---------------- HEADER ---------------- */}
      <div className="text-center sticky top-0 z-20 py-6 
        bg-gray-900/30 dark:bg-gray-900/30 backdrop-blur-md shadow-md">

        {/* Dark Mode Toggle */}
        <div className="absolute right-6 top-6">
          <button
            onClick={toggleDarkMode}
            className="text-3xl bg-gray-700 p-3 rounded-full shadow-md 
            hover:scale-110 transition text-white"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Title */}
        <h1 className="text-5xl mb-4 font-extrabold tracking-wide text-white">
          🎭 Meme <span className="text-yellow-400">Search</span>
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mt-4">
          <div className="w-full sm:w-2/3 md:w-1/2 relative">
            <input
              type="text"
              placeholder="Search memes… e.g., hand, face, smile"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-6 py-3 pl-12 rounded-2xl 
              bg-gray-800/80 text-white 
              backdrop-blur-xl shadow-lg border border-gray-700
              focus:outline-none focus:ring-4 focus:ring-yellow-400 transition"
            />
            <span className="absolute left-4 top-3.5 text-gray-400 text-xl">🔍</span>
          </div>
        </div>
      </div>

      {/* ---------------- BODY CONTENT ---------------- */}
      <div className="mt-10 px-4">
        {loading ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            lg:grid-cols-4 gap-8 fade-in">
            {filtered.map((meme) => (
              <MemeCard key={meme.id} meme={meme} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MemeCard({ meme }) {
  return (
    <div
      className="
        relative group rounded-3xl overflow-hidden 
        bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl
        shadow-[0px_10px_40px_rgba(0,0,0,0.12)]
        dark:shadow-[0px_10px_40px_rgba(255,255,255,0.05)]
        transition-transform duration-300 hover:-translate-y-3
        hover:shadow-2xl hover:shadow-blue-300/40 
        dark:hover:shadow-yellow-300/30
      "
    >
      {/* Beautiful glow border on hover */}
      <div
        className="
          absolute inset-0 bg-gradient-to-br 
          from-blue-400 via-purple-400 to-pink-400
          opacity-0 group-hover:opacity-30 
          blur-2xl transition duration-500
        "
      ></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-t-3xl">
          <img
            src={meme.url}
            alt={meme.name}
            className="
              w-full h-52 object-cover 
              transition-transform duration-700 
              group-hover:scale-110 
            "
          />
        </div>

        {/* TITLE */}
        <div className="p-4 text-center">
          <h2
            className="
              text-lg font-semibold tracking-wide 
              text-gray-800 dark:text-white 
              group-hover:text-blue-600 
              dark:group-hover:text-yellow-300
              transition-colors
            "
          >
            {meme.name}
          </h2>
        </div>

      </div>
    </div>
  );
}

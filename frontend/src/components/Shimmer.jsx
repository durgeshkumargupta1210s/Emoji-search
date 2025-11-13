export default function Shimmer() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-2">
      {Array(8).fill("").map((_, i) => (
        <div
          key={i}
          className="h-60 bg-gradient-to-r from-gray-200 to-gray-300 
          dark:from-gray-700 dark:to-gray-600 animate-pulse 
          rounded-3xl shadow-md"
        />
      ))}
    </div>
  );
}

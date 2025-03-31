import Link from "next/link";

// Main landing page component for the portfolio
export default function Home() {
  return (
    // Main container for centered content
    <div className="h-[calc(100vh-64px)] text-zinc-800 dark:text-zinc-100">
      {/* Center content both vertically and horizontally */}
      <div className="h-full w-full flex flex-col items-center justify-center px-4 text-center">
        {/* Main content stack */}
        <div className="space-y-8 max-w-2xl">
          {/* Welcoming headline with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 text-transparent bg-clip-text">Welcome</h1>

          {/* Introduction text with consistent color */}
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300">Hi! I&apos;m Mckay. I like to build things.</p>

          {/* Call-to-action button with gradient */}
          <Link
            href="/projects"
            className="inline-block px-8 py-4 mt-8 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 dark:from-sky-400 dark:to-blue-400 dark:hover:from-sky-500 dark:hover:to-blue-500 text-white font-medium rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

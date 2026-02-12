import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          Hi, I'm Zach Babbitt
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          Software Engineer by day, photographer by passion. I build things with code
          and capture moments through my lens.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/photography"
            className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
          >
            View Photography
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            See Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "About | Zach Babbitt",
  description: "Learn more about me, my background, and what I do.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
        About Me
      </h1>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
          I'm a software engineer based in [Your Location]. I specialize in
          building web applications and have a passion for clean code and great
          user experiences.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">
          What I Do
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          By day, I work as a software engineer, building scalable systems and
          intuitive interfaces. I enjoy working across the stack, from designing
          APIs to crafting pixel-perfect UIs.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">
          Photography
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          When I'm not coding, you'll find me behind the camera. Photography lets
          me see the world differently and capture moments that tell stories.
          I'm particularly drawn to [landscape/portrait/street] photography.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">
          Get in Touch
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          I'm always open to interesting conversations and opportunities.
        </p>
        <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:your@email.com"
              className="text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              your@email.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              @yourusername
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              /in/yourusername
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

// Add your projects here
const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does and the problem it solves.",
    tags: ["TypeScript", "React", "Node.js"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "Another project description. Highlight the key features and your role.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "Describe the technical challenges you overcame and the impact of the project.",
    tags: ["Go", "Kubernetes", "AWS"],
    link: "https://example.com",
  },
];

export const metadata = {
  title: "Projects | Zach Babbitt",
  description: "Software engineering projects and open source contributions.",
};

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Projects
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
        A selection of projects I've built. From web applications to developer tools.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              {project.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-900 dark:text-zinc-100 font-medium hover:underline"
                >
                  Live Demo →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:underline"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

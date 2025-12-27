import { Helmet } from "react-helmet-async";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack application for managing tasks and projects. Built with React, Node.js, and PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Open Source Library",
    description:
      "A lightweight utility library for common JavaScript operations. Published on npm with over 10k weekly downloads.",
    tags: ["TypeScript", "npm", "Open Source"],
    github: "https://github.com",
  },
  {
    title: "CLI Tool",
    description:
      "A command-line tool for scaffolding React projects with best practices baked in.",
    tags: ["Node.js", "CLI", "React"],
    github: "https://github.com",
  },
  {
    title: "Design System",
    description:
      "A comprehensive design system with React components, documentation, and Figma integration.",
    tags: ["React", "Storybook", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "API Service",
    description:
      "RESTful API service for data aggregation and processing. Handles millions of requests per month.",
    tags: ["Python", "FastAPI", "Redis", "AWS"],
    github: "https://github.com",
  },
  {
    title: "Mobile App",
    description:
      "Cross-platform mobile application for expense tracking and budgeting.",
    tags: ["React Native", "TypeScript", "Firebase"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Your Name</title>
        <meta
          name="description"
          content="Explore projects and open source contributions by Your Name."
        />
      </Helmet>

      <div className="container-narrow py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground mt-2">
              A collection of projects I've worked on. Some are open source,
              others are client work.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border rounded-lg p-6 hover:bg-muted/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="font-mono font-medium text-lg">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

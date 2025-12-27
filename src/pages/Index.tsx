import { Link } from "react-router-dom";
import { ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container-narrow py-24 md:py-32">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm Your Name
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Software engineer and open source enthusiast. I build things for the web
            and write about development, design, and technology.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/about">
              About me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/projects">View projects</Link>
          </Button>
        </div>

        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">Find me on</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div className="pt-8">
          <h2 className="text-lg font-mono font-medium mb-4">Recent posts</h2>
          <div className="space-y-4">
            <Link
              to="/blog/getting-started-with-react"
              className="block group"
            >
              <article className="border rounded-lg p-4 hover:bg-muted/50">
                <p className="text-xs text-muted-foreground mb-1">
                  December 20, 2024
                </p>
                <h3 className="font-medium group-hover:underline">
                  Getting Started with React in 2024
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A comprehensive guide to building modern React applications.
                </p>
              </article>
            </Link>
            <Link to="/blog/typescript-best-practices" className="block group">
              <article className="border rounded-lg p-4 hover:bg-muted/50">
                <p className="text-xs text-muted-foreground mb-1">
                  December 15, 2024
                </p>
                <h3 className="font-medium group-hover:underline">
                  TypeScript Best Practices
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Tips and patterns for writing better TypeScript code.
                </p>
              </article>
            </Link>
          </div>
          <div className="mt-4">
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center"
            >
              View all posts
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

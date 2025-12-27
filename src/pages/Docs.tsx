import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import DocsSidebar from "@/components/layout/DocsSidebar";
import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Architecture", href: "/docs/architecture" },
      { title: "Configuration", href: "/docs/configuration" },
      { title: "Best Practices", href: "/docs/best-practices" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Performance", href: "/docs/performance" },
      { title: "Testing", href: "/docs/testing" },
      { title: "Deployment", href: "/docs/deployment" },
    ],
  },
];

const docsContent: Record<string, { title: string; content: string }> = {
  "": {
    title: "Introduction",
    content: `
Welcome to my documentation. Here you'll find guides, tutorials, and reference material for various topics I've written about.

## What's Here

This documentation covers various technical topics including:

- **Development guides** - Step-by-step tutorials for common tasks
- **Architecture patterns** - Best practices for building scalable applications
- **Tool configurations** - How to set up and configure development tools

## Navigation

Use the sidebar to navigate between different sections. Each section contains related articles organized by topic.

## Contributing

If you find any errors or have suggestions for improvement, feel free to open an issue on GitHub.
    `,
  },
  installation: {
    title: "Installation",
    content: `
This guide covers how to set up your development environment.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18 or later
- npm or yarn package manager
- Git

## Installation Steps

1. Clone the repository:

\`\`\`bash
git clone https://github.com/username/project.git
cd project
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Start the development server:

\`\`\`bash
npm run dev
\`\`\`

## Verification

After installation, open http://localhost:5173 in your browser to verify everything is working correctly.
    `,
  },
  "quick-start": {
    title: "Quick Start",
    content: `
Get up and running in under 5 minutes with this quick start guide.

## Create a New Project

The fastest way to get started is using the project template:

\`\`\`bash
npx create-my-app my-project
cd my-project
npm run dev
\`\`\`

## Project Structure

Your new project will have the following structure:

\`\`\`
my-project/
├── src/
│   ├── components/
│   ├── pages/
│   └── main.tsx
├── public/
└── package.json
\`\`\`

## Next Steps

Now that you have a running project, explore the following:

1. Read the Architecture guide to understand the project structure
2. Check out the Configuration options
3. Learn about Best Practices for development
    `,
  },
};

const Docs = () => {
  const { slug } = useParams();
  const doc = docsContent[slug || ""] || docsContent[""];

  return (
    <>
      <Helmet>
        <title>{doc.title} - Docs - Your Name</title>
        <meta name="description" content={doc.title} />
      </Helmet>

      <div className="container-wide py-12 md:py-16">
        <div className="flex gap-12">
          <DocsSidebar sections={sections} />

          <div className="flex-1 min-w-0">
            <article className="prose">
              <h1>{doc.title}</h1>
              <div className="whitespace-pre-line">{doc.content}</div>
            </article>

            <div className="border-t mt-12 pt-6">
              <div className="flex items-center justify-between text-sm">
                <Link
                  to="/docs"
                  className="text-muted-foreground hover:text-foreground"
                >
                  ← Previous
                </Link>
                <Link
                  to="/docs/installation"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Next →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;

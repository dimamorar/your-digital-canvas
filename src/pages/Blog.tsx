import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "getting-started-with-react",
    title: "Getting Started with React in 2024",
    description: "A comprehensive guide to building modern React applications with the latest tools and best practices.",
    date: "December 20, 2024",
    readTime: "8 min read",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    description: "Tips and patterns for writing better TypeScript code in your projects.",
    date: "December 15, 2024",
    readTime: "6 min read",
  },
  {
    slug: "building-design-systems",
    title: "Building Scalable Design Systems",
    description: "How to create and maintain a design system that scales with your team and product.",
    date: "December 10, 2024",
    readTime: "10 min read",
  },
  {
    slug: "api-design-principles",
    title: "REST API Design Principles",
    description: "Essential principles for designing clean, maintainable, and developer-friendly APIs.",
    date: "December 5, 2024",
    readTime: "7 min read",
  },
  {
    slug: "performance-optimization",
    title: "Web Performance Optimization",
    description: "Practical techniques for improving the performance of your web applications.",
    date: "November 28, 2024",
    readTime: "9 min read",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Your Name</title>
        <meta
          name="description"
          content="Articles about web development, software engineering, and technology by Your Name."
        />
      </Helmet>

      <div className="container-narrow py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
            <p className="text-muted-foreground mt-2">
              Thoughts on software development, design, and technology.
            </p>
          </div>

          <div className="space-y-1">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block group py-4 border-b last:border-0"
              >
                <article>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <time>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-mono font-medium text-lg group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    {post.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

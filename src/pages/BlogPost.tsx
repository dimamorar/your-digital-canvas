import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "getting-started-with-react": {
    title: "Getting Started with React in 2024",
    date: "December 20, 2024",
    content: `
React continues to evolve, and 2024 brings new patterns and best practices that make building modern web applications even better.

## Why React?

React remains one of the most popular libraries for building user interfaces. Its component-based architecture, virtual DOM, and extensive ecosystem make it an excellent choice for projects of all sizes.

## Setting Up Your Project

The recommended way to start a new React project in 2024 is using Vite. It provides fast development builds and excellent TypeScript support out of the box.

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Key Concepts

### Components

Components are the building blocks of React applications. They encapsulate UI logic and can be composed together to build complex interfaces.

### Hooks

Hooks like useState and useEffect allow you to use state and other React features in functional components.

### State Management

For complex applications, consider using state management libraries like Zustand or Jotai, which provide simpler APIs than Redux.

## Best Practices

1. Keep components small and focused
2. Use TypeScript for better developer experience
3. Implement proper error boundaries
4. Optimize performance with React.memo and useMemo when needed
5. Write tests for critical functionality

## Conclusion

React in 2024 is more powerful and developer-friendly than ever. Start with the basics, understand the core concepts, and gradually explore the ecosystem as your needs grow.
    `,
  },
  "typescript-best-practices": {
    title: "TypeScript Best Practices",
    date: "December 15, 2024",
    content: `
TypeScript has become the standard for large-scale JavaScript applications. Here are some best practices to make the most of it.

## Use Strict Mode

Always enable strict mode in your tsconfig.json. It catches more errors at compile time and leads to more robust code.

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## Prefer Interfaces for Object Types

Use interfaces for object shapes that might be extended or implemented. Use type aliases for unions, intersections, and utility types.

## Avoid \`any\`

The \`any\` type defeats the purpose of TypeScript. Use \`unknown\` when you need to accept any value, then narrow the type with type guards.

## Use Discriminated Unions

Discriminated unions are powerful for modeling state machines and handling different cases safely.

\`\`\`typescript
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: Error };
\`\`\`

## Leverage Utility Types

TypeScript provides many utility types like Partial, Required, Pick, and Omit. Use them to transform existing types.

## Conclusion

Following these practices will help you write safer, more maintainable TypeScript code that catches bugs before they reach production.
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug || ""];

  if (!post) {
    return (
      <div className="container-narrow py-12">
        <p>Post not found.</p>
        <Link to="/blog" className="text-muted-foreground hover:text-foreground mt-4 inline-block">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Your Name</title>
        <meta name="description" content={post.title} />
      </Helmet>

      <div className="container-narrow py-12 md:py-16">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>

        <article className="prose">
          <time className="text-sm text-muted-foreground">{post.date}</time>
          <h1 className="mt-2">{post.title}</h1>
          <div className="whitespace-pre-line">{post.content}</div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;

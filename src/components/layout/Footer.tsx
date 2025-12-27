import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container-wide flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
        <p className="text-sm text-muted-foreground">
          Built with React. The source code is available on{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground">
            About
          </Link>
          <Link to="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link to="/blog" className="hover:text-foreground">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

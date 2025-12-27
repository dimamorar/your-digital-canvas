import { Link } from "react-router-dom";
import { Github, Twitter } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container-wide flex h-14 items-center justify-between">
        <Link to="/" className="font-mono font-semibold">
          yourname
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

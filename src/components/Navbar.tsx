import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-background to-transparent px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-primary text-3xl font-bold tracking-tight">
          STREAMFLIX
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-muted-foreground transition-colors">
            Home
          </Link>
          <Link to="/" className="text-foreground hover:text-muted-foreground transition-colors">
            TV Shows
          </Link>
          <Link to="/" className="text-foreground hover:text-muted-foreground transition-colors">
            Movies
          </Link>
          <Button variant="default" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

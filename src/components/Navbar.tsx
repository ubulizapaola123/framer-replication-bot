import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-card/80 backdrop-blur-md rounded-full px-2 py-1.5 border border-border shadow-sm">
        <span className="px-4 py-2 text-sm font-medium text-primary">NexaTech Rwanda</span>
        <a href="#home" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
        <a href="#about" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
        <a href="#work" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">Work</a>
        <Button size="sm" className="rounded-full ml-2 gap-2">
          <MessageSquare className="w-4 h-4" />
          Say hi
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

import { Button } from "./ui/button";
import { MessageSquare, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-2">NexaTech Rwanda</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Transforming Africa and Rwanda tech solutions
            </p>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Get in contact
            </Button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-primary-foreground transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-medium mb-4">Contacts</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>+250723374650</li>
              <li>NexaTech347@gmail.com</li>
              <li>Rwanda</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/50">© 2025 All rights reserved</p>
          <p className="text-sm text-primary-foreground/70">NexaTech Rwanda</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

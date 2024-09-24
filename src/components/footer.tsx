import { Github, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background flex items-center justify-between p-6">
      <div className="text-muted-foreground text-sm">
        © 2024 Tts. Все права защищены.
      </div>
      <div className="flex space-x-4">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

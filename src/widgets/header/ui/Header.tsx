import { Github } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "@/features/theme-switcher";

const Header = () => {
  return (
    <header className="theme-transition container mx-auto flex items-center justify-between px-4 py-6">
      <h1 className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-3xl font-bold text-transparent">
        Base Project
      </h1>
      <div className="flex items-center space-x-4">
        <Link
          href="https://github.com/yourusername"
          className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;

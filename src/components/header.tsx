import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-background flex items-center justify-between p-6">
      <div className="flex items-center space-x-2">
        <div className="bg-foreground h-8 w-8 rounded-full" />
        <span className="text-2xl font-bold">Tts</span>
      </div>
      <nav className="space-x-4">
        <Link href="/" className="text-sm font-medium hover:underline">
          Docs
        </Link>
        <Link href="/" className="text-sm font-medium hover:underline">
          Examples
        </Link>
        <Link href="/" className="text-sm font-medium hover:underline">
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default Header;

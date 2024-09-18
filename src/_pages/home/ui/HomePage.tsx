import { LinkItem } from "@/entities/link-item";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const HomePage = () => {
  const links = [
    {
      href: "https://nextjs.org/docs",
      title: "Next.js Docs",
      description: "Find in-depth information about Next.js features and API.",
      color: "blue",
    },
    {
      href: "https://react.dev",
      title: "React Docs",
      description:
        "Learn about React, the library for web and native user interfaces.",
      color: "green",
    },
    {
      href: "https://www.typescriptlang.org/docs/",
      title: "TypeScript Docs",
      description: "Explore TypeScript, the typed superset of JavaScript.",
      color: "yellow",
    },
    {
      href: "https://tailwindcss.com/docs",
      title: "Tailwind CSS Docs",
      description:
        "Discover the utility-first CSS framework for rapid UI development.",
      color: "purple",
    },
    {
      href: "https://feature-sliced.design/",
      title: "Feature-Sliced Design",
      description:
        "Learn about the architectural methodology for frontend projects.",
      color: "red",
    },
    {
      href: "https://eslint.org/docs/user-guide/getting-started",
      title: "ESLint Docs",
      description:
        "Explore ESLint, the pluggable linting utility for JavaScript and JSX.",
      color: "indigo",
    },
  ];
  return (
    <div className="theme-transition min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-5xl font-bold text-transparent">
            Welcome to the Base Project
          </h2>
          <p className="theme-transition mb-12 text-xl text-gray-700 dark:text-gray-300">
            This is a Next.js project with TypeScript, React, ESLint, Prettier,
            Tailwind CSS, and Feature-Sliced Design architecture.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {links.map((item, index) => (
              <LinkItem {...item} key={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="flex justify-between items-center bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-black">My Next.js App</h1>
        <nav className="flex space-x-4">
          <button
            onClick={() => navigateTo("/")}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("/about")}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            About
          </button>
          <button
            onClick={() => navigateTo("/contact")}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Contact
          </button>
          <button
            onClick={() => navigateTo("/form")}
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
          >
            Form
          </button>
        </nav>
      </header>

      <main className="mt-8">
        <h2 className="text-xl font-semibold text-white mb-4">Welcome to My Next.js App!</h2>
        <p className="text-white leading-relaxed">
          This is the home page of the application. Use the navigation buttons
          above to explore different sections, such as the About page, Contact
          page, and the Form page.
        </p>
      </main>
    </div>
  );
};

export default HomePage;

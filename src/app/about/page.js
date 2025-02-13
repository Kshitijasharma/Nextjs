"use client";

import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();

  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="text-white-700 leading-relaxed">
        Welcome to our platform! We are dedicated to providing exceptional services and solutions that meet your needs. 
        Our team is passionate about innovation, collaboration, and delivering results that exceed expectations.
      </p>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-white-700">
          Have questions or want to learn more? Feel free to reach out to us at{" "}
          <a
            href="mailto:contact@yourwebsite.com"
            className="text-blue-500 underline"
          >
            contact@yourwebsite.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

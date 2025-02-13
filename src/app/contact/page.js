"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending data to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      {/* Back Button */}

      <button
        onClick={() => router.back()}
        className = "mb-4 bg-gray-500 text-white py-2 px-4"
      >
        ← Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-white-700 mb-6">
        If you have any questions or inquiries, feel free to reach out to us using the form below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 text-black p-2 rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-600">
          Thank you for contacting us! We will get back to you soon.
        </p>
      )}
    </div>
  );
};

export default ContactPage;

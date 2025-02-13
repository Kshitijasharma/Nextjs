"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const FormPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [records, setRecords] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedRecords = [...records];
      updatedRecords[editingIndex] = formData;
      setRecords(updatedRecords);
      setEditingIndex(null);
    } else {
      setRecords([...records, formData]);
    }
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleEdit = (index) => {
    setFormData(records[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filteredRecords = records.filter((_, i) => i !== index);
    setRecords(filteredRecords);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        ← Back
      </button>

      <h1 className="text-xl font-bold mb-4">CRUD Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 text-black p-2 rounded"
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
            className="w-full border border-gray-300 text-black p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 text-black p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {editingIndex !== null ? "Update Record" : "Add Record"}
        </button>
      </form>

      <h2 className="text-lg font-semibold mt-8 mb-4">Records</h2>
      <ul className="space-y-2">
        {records.map((record, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-black bg-gray-100 p-2 rounded"
          >
            <div>
              <p>Name: {record.name}</p>
              <p>Email: {record.email}</p>
              <p>Phone: {record.phone}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-400 text-black px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormPage;

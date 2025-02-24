"use client";

import { useState } from "react";

export default function AlumniForm() {
  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");
  const [ctc, setCtc] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [rounds, setRounds] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ year, company, ctc, eligibility, rounds, experience });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-serif text-center font-bold text-blue-500  mb-4">Alumni Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Year of Placement</label>
          <input
            type="date"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">CTC</label>
          <input
            type="number"
            value={ctc}
            onChange={(e) => setCtc(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Eligibility Criteria</label>
          <input
            type="text"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Number of Rounds Attended</label>
          <input
            type="number"
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Experience Description</label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:scale-110 transform transition-transform duration-300 text-white p-2 rounded">
            Submit
            </button>
        </div>
        
      </form>
    </div>
  );
}
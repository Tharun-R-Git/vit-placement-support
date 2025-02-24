"use client";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

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
        <h2 className="text-2xl font-serif text-center font-bold text-blue-500 mb-4">Alumni Form</h2>
        <div className="mb-4">
          <Label className="block text-gray-700">Year of Placement</Label>
          <Input
            type="date"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1 p-2 border rounded w-1/4"
          />
        </div>
        <div className="mb-4">
          <Label className="block text-gray-700">Company</Label>
          <Input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <Label className="block text-gray-700">CTC</Label>
          <Input
            type="number"
            value={ctc}
            onChange={(e) => setCtc(e.target.value)}
            className="mt-1 p-2 border rounded w-1/4"
          />
        </div>
        <div className="mb-4">
          <Label className="block text-gray-700">Eligibility Criteria</Label>
          <Input
            type="text"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <Label className="block text-gray-700">Number of Rounds Attended</Label>
          <Input
            type="number"
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
            className="mt-1 p-2 border rounded w-1/4"
          />
        </div>
        <div className="mb-4">
          <Label className="block text-gray-700">Experience Description</Label>
          <Textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mt-1 p-2 border rounded w-full h-32"
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="bg-blue-500 hover:scale-110 transform transition-transform duration-300 text-white p-2 rounded">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";

export default function RegisterPage() {
  const [userType, setUserType] = useState<"student" | "alumni" | null>(null);
  const router = useRouter();

  const handleUserTypeSelection = (type: "student" | "alumni") => {
    setUserType(type);
    if (type === "student") {
      router.push("/studentForm");
    } else if (type === "alumni") {
      router.push("/alumniForm");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-x-4">
        <Button onClick={() => handleUserTypeSelection("student")} className="bg-blue-500 text-white py-2 px-4 rounded">
          Student
        </Button>
        <Button onClick={() => handleUserTypeSelection("alumni")} className="bg-green-500 text-white py-2 px-4 rounded">
          Alumni
        </Button>
      </div>
    </div>
  );
}

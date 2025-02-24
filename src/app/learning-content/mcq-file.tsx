"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type MCQSetProps = {
  title: string
  weekNumber: number
  setType: "cs" | "dsa" | "aptitude"
}

export function MCQSet({ title, weekNumber, setType }: MCQSetProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})

  // This would be replaced with actual questions fetched from an API or database
  const questions = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    question: `Sample ${setType.toUpperCase()} question ${i + 1} for Week ${weekNumber}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
  }))

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = () => {
    console.log(`Submitted answers for ${setType} in Week ${weekNumber}:`, answers)
    // Here you would typically send the answers to your backend for processing
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      {questions.map((q) => (
        <div key={q.id} className="space-y-2">
          <p className="font-medium">{q.question}</p>
          <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)}>
            {q.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${q.id}-${index}`} />
                <Label htmlFor={`${q.id}-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
      <Button onClick={handleSubmit}>Submit Answers</Button>
    </div>
  )
}


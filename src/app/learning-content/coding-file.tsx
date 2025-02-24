"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

type CodingQuestionProps = {
    weekNumber: number
    questionNumber: number
}

export function CodingQuestion({ weekNumber, questionNumber }: CodingQuestionProps) {
    const [code, setCode] = useState("")
    const [feedback, setFeedback] = useState("")

    const handleSubmit = async () => {
        // Here you would send the code to your backend, which would then use the Gemini API
        // For now, we'll just simulate a response
        setFeedback("Code submitted successfully. Awaiting Gemini API evaluation.")
        toast.success("Code submitted successfully.")

        // Simulating API call
        setTimeout(() => {
            setFeedback("Great job! Your solution passes all test cases.")
        }, 2000)
    }

    return (
        <div className="space-y-4">
            <h4 className="font-medium">Question {questionNumber}</h4>
            <p>
                Write a function that solves the following problem: [Problem description for Week {weekNumber}, Question {questionNumber}]
            </p>
            <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your code here..."
                className="h-40"
            />
            <Button onClick={handleSubmit}>Submit Code</Button>
            {feedback && <p className="text-sm italic">{feedback}</p>}
        </div>
    )
}

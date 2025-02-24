"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MCQSet } from "./mcq-file"
import { VideoSection } from "./video-file"
import { CodingQuestion } from "./coding-file"

const TOTAL_WEEKS = 20

export default function LearningContent() {
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Weekly Learning Content</h1>
      <Accordion type="single" collapsible onValueChange={setExpandedWeek}>
        {Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1).map((week) => (
          <AccordionItem key={week} value={`week-${week}`}>
            <AccordionTrigger>Week {week}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-8">
                <MCQSet title="CS Fundamentals" weekNumber={week} setType="cs" />
                <MCQSet title="Data Structures and Algorithms" weekNumber={week} setType="dsa" />
                <MCQSet title="Aptitude" weekNumber={week} setType="aptitude" />
                <VideoSection weekNumber={week} />
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">DSA Coding Questions</h3>
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((questionNumber) => (
                    <CodingQuestion key={questionNumber} weekNumber={week} questionNumber={questionNumber} />
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}


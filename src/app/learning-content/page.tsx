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
              <Accordion type="multiple" collapsible>
                <AccordionItem value={`mcq-${week}`}>
                  <AccordionTrigger>MCQs</AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="multiple" collapsible>
                      <AccordionItem value={`mcq-cs-${week}`}>
                        <AccordionTrigger>CS Fundamentals</AccordionTrigger>
                        <AccordionContent>
                          <MCQSet title="CS Fundamentals" weekNumber={week} setType="cs" />
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value={`mcq-dsa-${week}`}>
                        <AccordionTrigger>Data Structures and Algorithms</AccordionTrigger>
                        <AccordionContent>
                          <MCQSet title="Data Structures and Algorithms" weekNumber={week} setType="dsa" />
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value={`mcq-aptitude-${week}`}>
                        <AccordionTrigger>Aptitude</AccordionTrigger>
                        <AccordionContent>
                          <MCQSet title="Aptitude" weekNumber={week} setType="aptitude" />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value={`video-${week}`}>
                  <AccordionTrigger>Video Lectures</AccordionTrigger>
                  <AccordionContent>
                    <VideoSection weekNumber={week} />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value={`coding-${week}`}>
                  <AccordionTrigger>DSA Coding Questions</AccordionTrigger>
                  <AccordionContent>
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((questionNumber) => (
                      <CodingQuestion key={questionNumber} weekNumber={week} questionNumber={questionNumber} />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

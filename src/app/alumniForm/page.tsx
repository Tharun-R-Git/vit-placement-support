"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const currentYear = new Date().getFullYear();

const formSchema = z.object({
  year: z
    .string()
    .refine(
      (val) => {
        const yearNum = Number.parseInt(val, 10);
        return !isNaN(yearNum) && yearNum >= 1900 && yearNum <= currentYear;
      },
      {
        message: `Year must be between 1900 and ${currentYear}.`,
      }
    ),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  ctcFixed: z.string().min(1, {
    message: "Please enter the fixed CTC.",
  }),
  ctcBonus: z.string().optional(),
  eligibility: z.string().min(2, {
    message: "Eligibility criteria must be at least 2 characters.",
  }),
  rounds: z.string().min(1, {
    message: "Please enter the number of rounds.",
  }),
  experience: z.string().min(10, {
    message: "Experience description must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Invalid email format.",
  }),
});

export default function AlumniForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      year: "",
      company: "",
      ctcFixed: "",
      ctcBonus: "",
      eligibility: "",
      rounds: "",
      experience: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission logic here
    setShowSuccess(true);
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h2 className="text-3xl font-sans text-center font-bold text-primary mb-8">Alumni Experience Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year of Placement</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the year of placement" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="ctcFixed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fixed CTC</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter fixed CTC" {...field} />
                  </FormControl>
                  <FormDescription>Annual fixed component of your CTC</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ctcBonus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bonus/Variable CTC</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter bonus/variable CTC" {...field} />
                  </FormControl>
                  <FormDescription>Annual bonus or variable component (if any)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="eligibility"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Eligibility Criteria</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the eligibility criteria" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rounds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Rounds Attended</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter number of rounds" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share your interview experience and any tips for future candidates"
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Success!</h3>
            <p className="mb-4">Your form has been submitted successfully.</p>
            <Button onClick={() => setShowSuccess(false)} className="bg-blue-500 text-white py-2 px-4 rounded">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}


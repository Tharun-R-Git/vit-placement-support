"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SuccessModal from "@/components/successFile";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  rollNumber: z.string().min(1, {
    message: "Roll number is required.",
  }),
  email: z.string().email({
    message: "Invalid email format.",
  }),
  department: z.string().min(2, {
    message: "Department name must be at least 2 characters.",
  }),
  branch: z.string().min(2, {
    message: "Branch name must be at least 2 characters.",
  }),
  cgpa: z
    .string()
    .min(1, {
      message: "CGPA must be at least 1.",
    })
    .max(10, {
      message: "CGPA must be at most 10.",
    }),
});

export default function StudentForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      rollNumber: "",
      email: "",
      department: "",
      branch: "",
      cgpa: "0",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const parsedValues = {
      ...values,
      cgpa: Number(values.cgpa),
    };
    console.log(parsedValues);
    // Handle form submission logic here
    setShowSuccess(true);
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h2 className="text-3xl font-sans text-center font-bold text-primary mb-8">Student Details Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-evenly">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem  className="flex-1 pr-12">
                <FormLabel>Email</FormLabel>
                <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
          <FormField
            control={form.control}
            name="rollNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Roll Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your roll number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          </div>

            <div className="flex justify-evenly">

          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem className="flex-1 pr-6">
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your department" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        
          <FormField
            control={form.control}
            name="branch"
            render={({ field }) => (
              <FormItem className="flex-1 pl-6">
                <FormLabel>Branch</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your branch" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            </div>
        
          <FormField
            control={form.control}
            name="cgpa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CGPA</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" min="1" max="10" placeholder="Enter your CGPA" {...field} />
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
      <SuccessModal
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Your student details have been submitted successfully."
      />
    </div>
  );
}
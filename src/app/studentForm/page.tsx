"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import Modal from "react-modal"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import "react-toastify/dist/ReactToastify.css"
import React from "react"
Modal.setAppElement("#__next")

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
}
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    group: z.string().min(1, {
        message: "Please enter your group.",
    }),
    department: z.string().min(2, {
        message: "Department name must be at least 2 characters.",
    }),
    cgpa: z.string().min(1, {
        message: "CGPA must be at least 1.",
    }).max(10, {
        message: "CGPA must be at most 10.",
    }),
    rank: z.string().min(1, {
        message: "Rank must be at least 1.",
    }).max(5000, {
        message: "Rank must be at most 5000.",
    }),
})

export default function StudentForm() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            group: "",
            department: "",
            cgpa: "0",
            rank: "0",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const parsedValues = {
            ...values,
            cgpa: Number(values.cgpa),
            rank: Number(values.rank),
        }
        console.log(parsedValues)
        // Handle form submission logic here
        setModalIsOpen(true)
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
                    <FormField
                        control={form.control}
                        name="group"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Group</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your group" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                            <FormItem>
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
                    <FormField
                        control={form.control}
                        name="rank"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rank</FormLabel>
                                <FormControl>
                                    <Input type="number" min="1" max="5000" placeholder="Enter your rank" {...field} />
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

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Success Modal"
                className="modal"
                overlayClassName="overlay"
            >
                <h2>Success</h2>
                <p>Form submitted successfully!</p>
                <Button onClick={() => setModalIsOpen(false)}>Close</Button>
            </Modal>
        </div>
    )
}

"use client";

import type React from "react";
import { useState } from "react";
import { Book, User, ListIcon as Category, TrendingUp } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  { icon: Book, label: "Learning Content", content: "Access your learning materials and courses here." },
  { icon: User, label: "Student Profile", content: "View and edit your personal information and academic details." },
  { icon: Category, label: "Category Selection", content: "Choose or change your academic focus and specializations." },
  {
    icon: TrendingUp,
    label: "Progress & Performance",
    content: "Track your academic progress and view performance metrics.",
  },
];

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [selectedItem, setSelectedItem] = useState(menuItems[0].label);

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarHeader className="p-4">
            <h2 className="text-xl font-bold">Student Dashboard</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    onClick={() => setSelectedItem(item.label)}
                    isActive={selectedItem === item.label}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <Button variant="outline" className="w-full">Sign Out</Button>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="bg-gray-100">
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">{selectedItem}</h1>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </header>

          <main className="p-6">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{selectedItem}</CardTitle>
                <CardDescription>{menuItems.find((item) => item.label === selectedItem)?.content}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>Detailed information and interactive elements for {selectedItem} will be displayed here.</p>
              </CardContent>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

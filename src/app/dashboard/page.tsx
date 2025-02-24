import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Welcome to your Dashboard</h1>
      <p>Hello, {session.user?.name || session.user?.email}</p>
      {/* Add more dashboard content here */}
    </div>
  );
}

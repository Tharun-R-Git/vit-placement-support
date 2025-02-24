import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User"; // Import User model

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // ✅ Connect to MongoDB
        await dbConnect();

        // ✅ Use Mongoose model instead of raw collection
        const user = await User.findOne({ email: credentials.email });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        return { id: user._id.toString(), email: user.email, name: user.name };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

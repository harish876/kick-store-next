import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/database/connect";
import Users from "@/database/model/schema";
import { isEmpty } from "lodash";
import { compare } from "bcrypt";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectDB().catch((error) => {
          error: "Connection Failed";
        });
        const result = await Users.findOne({ email: credentials.email });
        if (isEmpty(result)) {
          throw new Error("No User found with email. Please Sign up");
        }
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Password does not match");
        }
        return result;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);

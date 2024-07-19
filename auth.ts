import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session({ session }) {
      return session;
    },
    async jwt({ token }) {
      console.log({ token });
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

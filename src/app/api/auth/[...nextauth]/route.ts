import NextAuth from "next-auth";

import { authOptions } from "@/lib/authOptions";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    idToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    provider?: string;
    accessToken?: string;
    idToken?: string;
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

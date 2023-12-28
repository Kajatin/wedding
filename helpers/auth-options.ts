import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import getDb from "@/helpers/db";
const { db } = getDb();

async function validateCode(code: string) {
  const user = await db.oneOrNone(
    `SELECT * FROM "users" WHERE code = $1`,
    code
  );

  if (!user) {
    return null;
  }

  return user;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Invitation code",
      credentials: {
        code: {
          label: "Code",
          type: "password",
          placeholder: "Your invitation code",
        },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("No credentials");
        }

        return await validateCode(credentials.code);
      },
    }),
  ],
  // https://next-auth.js.org/configuration/options#pages
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  // https://next-auth.js.org/configuration/options#session
  session: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
};

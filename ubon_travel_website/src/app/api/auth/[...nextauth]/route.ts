import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      password: string;
      role: number;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    role?: number;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        email: { type: "email", label: "Email", placeholder: "Email" },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        if(res.ok){
          const resp = await res.json()
          return resp
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id ?? 0, // Provide a default value if undefined
          name: token.name ?? "", // Provide a default value if undefined
          email: token.email ?? "", // Provide a default value if undefined
          password: token.password ?? "", // Provide a default value if undefined
          role: token.role ?? 0, // Provide a default value if undefined
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.password = user.password;
        token.role = user.role;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };

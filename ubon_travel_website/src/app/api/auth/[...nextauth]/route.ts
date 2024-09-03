import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const user = {
          name: "Thawitchai Boonsong",
          email: "thawitchai@gmail.com",
          password: "13495000",
        };
        if (
          credentials?.email === user.email &&
          credentials.password === user.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
});
export { handler as GET, handler as POST };
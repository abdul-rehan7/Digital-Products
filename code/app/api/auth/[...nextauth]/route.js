import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let user = null;
        user = 
          {
            id: "2",
            name: "user",
            email: "abdulrehan0318@gmail.com",
          }
        
        if (!user) {
          console.log("Invalid User");
          return null;
        }
        return user;
      },
    }),

    // ...add more providers here
  ],
});

export { authOptions as GET, authOptions as POST };

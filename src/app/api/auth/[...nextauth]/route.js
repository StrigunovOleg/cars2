import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Covered_By_Your_Grace } from "next/font/google";

import { redirect } from "next/navigation";

const options = {
    callback: {
        signIn(user, account, profile) {
            user.name = slug(user.email.slice(0, user.email.indexOf('@'))) // or whatever else
      
            return true
          }
      },
      providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

            const passw = process.env.PASSWORD;
            const login = process.env.LOGIN;

      
            if (credentials.username === login) {
              // Any object returned will be saved in `user` property of the JWT
              if (credentials.password === passw) {
                return user;
              } else {
                return null;
              }
              
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null;
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })
      ]
    
}

const handler = NextAuth(options)

export  {handler as GET, handler as POST}
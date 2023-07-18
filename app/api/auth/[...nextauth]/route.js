import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

export const OPTIONS = {
    secret: process.env.AUTH_SECRET,
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        TwitterProvider({
          clientId: process.env.TWITTER_ID,
          clientSecret: process.env.TWITTER_SECRET,
          version: "2.0", // opt-in to Twitter OAuth 2.0
        })
    ]
}

const handler=NextAuth(OPTIONS)

export {handler as GET , handler as POST}
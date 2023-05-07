import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import KeycloakProvider from "next-auth/providers/keycloak";
import {SessionContextValue, signOut} from "next-auth/react";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID,
            clientSecret: process.env.KEYCLOAK_SECRET,
            issuer: process.env.KEYCLOAK_ISSUER,
        })
    ],
    session: {strategy: "jwt"},
    callbacks: {
        async jwt({token, account, profile}) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                const newToken = {...token, accessToken :account.access_token}
                console.log("access token ",account.access_token)
                return newToken
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            // eslint-disable-next-line no-param-reassign
            session.accessToken = token.accessToken
            // eslint-disable-next-line no-param-reassign
            session.user.id = token.id
            return session
        }
    },
}

export default NextAuth(authOptions)
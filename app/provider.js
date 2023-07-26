"use client";

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children, pageProps }) => {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuthProvider
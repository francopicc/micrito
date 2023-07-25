import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import AuthProvider from './provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Micrito',
  description: 'Todos los micros en la palma de tu mano.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#202020]">
      <Script src="https://kit.fontawesome.com/e80c9c3cc8.js" />
      <AuthProvider>
        <body className={inter.className}>
            {children}
        </body>
      </AuthProvider>
    </html>
  )
}

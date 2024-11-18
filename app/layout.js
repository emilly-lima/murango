import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap'})

export const metadata = {
  title: 'Murango',
  description: 'Murango',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${plus_jakarta_sans.variable}`}>
      <head>
        <link rel="icon" href="/assets/favicon.ico"></link>
      </head>
      <body className={[plus_jakarta_sans.className]}>{children}</body>
    </html>
  )
}

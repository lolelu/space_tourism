import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Bellefair } from 'next/font/google'
import { Barlow_Condensed } from 'next/font/google'
import { Barlow } from 'next/font/google'

const bellefair = Bellefair({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bellefair',
})
const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})
const barlow = Barlow({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-barlow',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  )
}

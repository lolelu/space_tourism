import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import MobileBackground from '@/public/assets/home/background-home-mobile.jpg'
import TabletBackground from '@/public/assets/home/background-home-tablet.jpg'
import DesktopBackground from '@/public/assets/home/background-home-desktop.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout
        title={'Home'}
        mobileBackground={MobileBackground.src}
        tabletBackground={TabletBackground.src}
        desktopBackground={DesktopBackground.src}
      >
        <div
          className={
            'flex flex-col items-center justify-center gap-4 pt-4 text-center'
          }
        >
          <h2 className={'font-condensed tracking-subtitle text-secondary'}>
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="font-serif text-[5rem] leading-[6.25rem] text-tertiary">
            SPACE
          </h1>
          <p className={'font-sans text-[0.9375rem] leading-6 text-secondary'}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </Layout>
    </>
  )
}

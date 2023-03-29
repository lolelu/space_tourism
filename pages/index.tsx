import Layout from '@/components/Layout'
import MobileBackground from '@/public/assets/home/background-home-mobile.jpg'
import TabletBackground from '@/public/assets/home/background-home-tablet.jpg'
import DesktopBackground from '@/public/assets/home/background-home-desktop.jpg'
import { ExploreButton } from '@/components/exploreButton'

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
            'flex h-full flex-col items-center justify-between pb-6 md:justify-around'
          }
        >
          <div
            className={
              ' flex max-w-xs flex-col items-center justify-center gap-4 pt-4 text-center md:max-w-md'
            }
          >
            <h2
              className={
                'font-condensed tracking-subtitle text-secondary md:text-xl/[1.5rem]'
              }
            >
              SO, YOU WANT TO TRAVEL TO
            </h2>
            <h1 className="font-serif text-[5rem] leading-[6.25rem] text-tertiary md:text-[9.375rem]/[9.375rem] ">
              SPACE
            </h1>
            <p
              className={
                ' font-sans text-[0.9375rem] leading-6 text-secondary md:px-2 md:text-base/[1.75rem] '
              }
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          {/*[28.125rem]*/}
          <div>
            <ExploreButton onClick={() => console.log('button')} />
          </div>
        </div>
      </Layout>
    </>
  )
}

import Image from 'next/image'
import Logo from '@/public/assets/shared/logo.svg'
import Hamburger from '@/public/assets/shared/icon-hamburger.svg'
import Close from '@/public/assets/shared/icon-close.svg'
import { useState } from 'react'
import Link from 'next/link'
import MenuLink from '@/components/Navbar/MenuLink'

// Mobile Navbar (maybe use a different component for mobile and desktop?)
const menuLinks = [
  {
    linkName: 'home',
    linkNumber: '00',
    linkUrl: '/',
  },
  {
    linkName: 'destinations',
    linkNumber: '01',
    linkUrl: '/destinations',
  },
  {
    linkName: 'crew',
    linkNumber: '02',
    linkUrl: '/crew',
  },
  {
    linkName: 'technology',
    linkNumber: '03',
    linkUrl: '/technology',
  },
]
//Pass an array of links to the component
const Index = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  return (
    <nav className={'relative isolate z-20'}>
      {/*  NAVBAR */}
      <div className={'fixed left-0 right-0 top-0 z-10 h-24'}>
        <div className={'flex h-full flex-row items-center justify-between '}>
          <Link className={'p-6'} href={'/'}>
            <Image src={Logo} alt={'Space mission logo'} />
          </Link>

          <div className={'relative hidden grow lg:flex'}>
            <hr
              className={
                'border-1 absolute -right-8 left-0 z-10 border-tertiary/25'
              }
            />
          </div>

          <div className={'pr-6 md:hidden'}>
            <Image
              src={mobileMenuIsOpen ? Close : Hamburger}
              alt={'Hamburger menu'}
              onClick={() => setMobileMenuIsOpen((isOpen) => !isOpen)}
            />
          </div>
          <div
            className={
              ' hidden h-full items-center justify-center bg-tertiary/5 backdrop-blur-2xl md:flex'
            }
          >
            <ul
              className={
                'h-full items-center justify-center gap-6 md:flex md:flex-row md:gap-9 md:px-12 lg:gap-12 lg:px-40'
              }
            >
              {menuLinks.map((link) => (
                <MenuLink
                  key={link.linkName}
                  linkName={link.linkName}
                  linkNumber={link.linkNumber}
                  linkUrl={link.linkUrl}
                />
              ))}
            </ul>
          </div>

          {/*  DESKTOP MENU */}
        </div>
      </div>

      {/*  MOBILE MENU */}
      <div
        className={`fixed bottom-0 right-0 top-0 w-64 bg-blue-900 bg-tertiary/5 py-32 pl-8 backdrop-blur-2xl transition  duration-500 md:hidden ${
          mobileMenuIsOpen
            ? 'translate-x-0 bg-tertiary/5  '
            : 'translate-x-full bg-primary/50 '
        }`}
      >
        <div>
          <ul
            className={'flex h-full flex-col items-start justify-start  gap-6 '}
          >
            {menuLinks.map((link) => (
              <MenuLink
                key={link.linkName}
                linkName={link.linkName}
                linkNumber={link.linkNumber}
                linkUrl={link.linkUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Index

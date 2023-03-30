import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import MobileBackground from '@/public/assets/home/background-home-mobile.jpg'
import TabletBackground from '@/public/assets/home/background-home-tablet.jpg'
import DesktopBackground from '@/public/assets/home/background-home-desktop.jpg'
import Image from 'next/image'

const theme = require('tailwindcss/defaultTheme')

const Index = ({
  children,
  title = '',
  fullHeight = false,
  mobileBackground = MobileBackground,
  tabletBackground = TabletBackground,
  desktopBackground = DesktopBackground,
}: {
  children: React.ReactNode
  title?: string
  fullHeight?: boolean
  mobileBackground?: any
  tabletBackground?: any
  desktopBackground?: any
}) => {
  // Define breakpoints as an object with names and minimum widths
  const breakpoints = {
    base: '0px',
    md: theme.screens.md,
    lg: theme.screens.lg,
  }

  // Initialize state variable for current breakpoint
  const [currentBreakpoint, setCurrentBreakpoint] = useState('')

  // Add an event listener to update the current breakpoint on window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      let newBreakpoint = ''
      for (const [breakpoint, minWidth] of Object.entries(breakpoints)) {
        if (width >= parseInt(minWidth, 10)) {
          newBreakpoint = breakpoint
        }
      }
      setCurrentBreakpoint(newBreakpoint)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Determine the background URL based on the current breakpoint
  let background = desktopBackground
  if (currentBreakpoint === 'base') {
    background = mobileBackground
  } else if (currentBreakpoint === 'md') {
    background = tabletBackground
  }

  return (
    <>
      <Head>
        <title>{`${title}${title != '' ? ' | ' : ''}Space Tourism`}</title>
        <meta name="description" content="Space Tourism Website, by LoLeLu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={'/assets/favicon-32x32.png'} />
      </Head>
      <Navbar />
      {/* Use Tailwind classes to set the background image style, set the background image using style */}
      <main
        className={`relative bg-cover bg-bottom text-tertiary md:bg-center lg:bg-right   ${
          fullHeight ? 'h-[100svh]' : 'min-h-[100svh]'
        }  `}
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <section
          className={`${
            fullHeight ? 'h-[100svh]' : 'min-h-[100svh]'
          } mx-auto p-6  pt-24 md:px-20 lg:max-w-screen-xl lg:px-[5.5rem] `}
        >
          {children}
        </section>
      </main>
    </>
  )
}

export default Index

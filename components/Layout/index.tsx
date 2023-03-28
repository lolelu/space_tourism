import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import MobileBackground from '@/public/assets/home/background-home-mobile.jpg'
import TabletBackground from '@/public/assets/home/background-home-tablet.jpg'
import DesktopBackground from '@/public/assets/home/background-home-desktop.jpg'

const theme = require('tailwindcss/defaultTheme')

const Index = ({
  children,
  title = '',
  mobileBackground = MobileBackground.src,
  tabletBackground = TabletBackground.src,
  desktopBackground = DesktopBackground.src,
}: {
  children: React.ReactNode
  title?: string
  mobileBackground?: string
  tabletBackground?: string
  desktopBackground?: string
}) => {
  // Define breakpoints as an object with names and minimum widths
  const breakpoints = {
    base: '0px',
    sm: theme.screens.sm,
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
  let backgroundUrl = desktopBackground
  if (currentBreakpoint === 'base') {
    backgroundUrl = mobileBackground
  } else if (currentBreakpoint === 'sm') {
    backgroundUrl = tabletBackground
  }

  return (
    <>
      <Head>
        <title>{`${title}${title != '' ? ' | ' : ''}Space Tourism`}</title>
        <meta name="description" content="Space Tourism Website, by LoLeLu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={'/assets/favicon-32x32.png'} />
      </Head>

      {/* Use Tailwind classes to set the background image style, set the background image using style */}
      <main
        className={`relative h-screen bg-cover bg-bottom p-6 pt-24 text-tertiary lg:bg-right`}
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <Navbar />
        {children}
      </main>
    </>
  )
}

export default Index

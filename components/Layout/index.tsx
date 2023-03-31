import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
const theme = require('tailwindcss/defaultTheme')

interface IndexProps {
  children: React.ReactNode
  title?: string
  fullHeight?: boolean
  mobileBackground?: any
  tabletBackground?: any
  desktopBackground?: any
}

const Index = ({
  children,
  title = '',
  fullHeight = false,
  mobileBackground,
  tabletBackground,
  desktopBackground,
}: IndexProps) => {
  // Initialize state variable for current breakpoint
  const [currentBreakpoint, setCurrentBreakpoint] = useState('')

  // Add an event listener to update the current breakpoint on window resize
  useEffect(() => {
    const breakpoints = {
      base: '0px',
      md: theme.screens.md,
      lg: theme.screens.lg,
    }
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
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Determine the background URL based on the current breakpoint
  const getBackgroundUrl = () => {
    if (currentBreakpoint === 'base') {
      return `url(${mobileBackground.src})`
    } else if (currentBreakpoint === 'md') {
      return `url(${tabletBackground.src})`
    } else {
      return `url(${desktopBackground.src})`
    }
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
        className={`relative bg-cover bg-bottom text-tertiary md:bg-center lg:bg-right ${
          fullHeight ? 'h-[100svh]' : 'min-h-[100svh]'
        }`}
        style={{ backgroundImage: getBackgroundUrl() }}>
        <section
          className={`${
            fullHeight ? 'h-[100svh]' : 'min-h-[100svh]'
          } lg:px-[5.5rem]' mx-auto flex flex-col items-center justify-center gap-2 p-6 pt-24 md:gap-8 md:px-20 lg:max-w-screen-xl lg:items-stretch`}>
          {children}
        </section>
      </main>
    </>
  )
}

export default Index

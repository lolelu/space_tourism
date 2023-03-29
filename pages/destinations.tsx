import Layout from '@/components/Layout'
import { Destination } from '@/types/data'
import { useState } from 'react'
import Image from 'next/image'
import PageTitle from '@/components/pageTitle'
import MobileBackground from '@/public/assets/destination/background-destination-mobile.jpg'
import TabletBackground from '@/public/assets/destination/background-destination-tablet.jpg'
import DesktopBackground from '@/public/assets/destination/background-destination-desktop.jpg'
const PlanetImage = (props: {
  activeDestination: Destination
  destination: Destination
}) => (
  <div
    className={` col-start-1 row-start-1 transform justify-self-center transition-all duration-500 ease-in-out
              ${
                props.activeDestination.name === props.destination.name
                  ? 'scale-100 opacity-100 delay-500'
                  : 'scale-50 opacity-0 delay-0'
              }`}
  >
    <Image
      src={props.destination.images.webp}
      alt={props.destination.name + ' image'}
      className={
        'h-[10.625rem] w-[10.625rem] md:h-[15.125rem] md:w-[15.125rem] lg:h-[17.125rem] lg:w-[17.125rem]'
      }
      width={445}
      height={445}
    />
  </div>
)

const PlanetData = (props: {
  activeDestination: Destination
  destination: Destination
}) => (
  <div
    className={`col-start-1 row-start-3 flex flex-col items-center justify-center gap-8 text-center transition-all duration-500 ease-in-out 
    ${
      props.activeDestination.name === props.destination.name
        ? 'opacity-100 delay-500'
        : 'opacity-0 delay-0'
    }`}
  >
    <div>
      <h1 className={'font-serif text-[3.5rem]/[4rem] uppercase'}>
        {props.destination.name}
      </h1>
      <p className={'text-[0.9375rem]/[1.5625rem] text-secondary'}>
        {props.destination.description}
      </p>
    </div>
    <hr className={'border-1 w-full border-[#383B4B] '} />
    <div className={'space-y-3'}>
      <h6
        className={
          'font-condensed text-sm uppercase tracking-subtitle text-secondary'
        }
      >
        avg. Distance
      </h6>
      <p className={'font-serif text-[1.75rem]/[2rem] uppercase'}>
        {props.destination.distance}
      </p>
    </div>
    <div className={'space-y-3'}>
      <h6
        className={
          'font-condensed text-sm uppercase tracking-subtitle text-secondary'
        }
      >
        Est. Travel time
      </h6>
      <p className={'font-serif text-[1.75rem]/[2rem] uppercase'}>
        {props.destination.travel}
      </p>
    </div>
  </div>
)

export default function Destinations({
  destinations,
}: {
  destinations: Destination[]
}) {
  const [activeDestination, setActiveDestination] = useState<Destination>(
    destinations[0],
  )
  return (
    <Layout
      desktopBackground={DesktopBackground}
      tabletBackground={TabletBackground}
      mobileBackground={MobileBackground}
    >
      <PageTitle pageNumber={'01'} pageTitle={'PICK YOUR DESTINATION'} />

      <div className={'mx-auto grid max-w-xs grid-cols-1 pt-4 '}>
        {destinations.map((destination) => (
          <PlanetImage
            key={destination.name}
            activeDestination={activeDestination}
            destination={destination}
          />
        ))}

        {/*  Planet selector*/}
        <div
          className={
            'col-start-1 row-start-2 mb-5 mt-6 flex items-center justify-evenly '
          }
        >
          {destinations.map((destination) => (
            <button
              className={
                'relative text-center font-condensed text-sm uppercase tracking-subtitle'
              }
              key={destination.name}
              onClick={() => setActiveDestination(destination)}
            >
              <div
                className={`absolute -bottom-2 h-1 w-full transform bg-secondary transition duration-500 ${
                  activeDestination.name === destination.name
                    ? ' scale-x-100 opacity-100 delay-500'
                    : ' scale-x-0 opacity-0 delay-0'
                }`}
              ></div>
              {destination.name}
            </button>
          ))}
        </div>

        {destinations.map((destination) => (
          <PlanetData
            key={destination.name}
            activeDestination={activeDestination}
            destination={destination}
          />
        ))}
      </div>
    </Layout>
  )
}

// getStaticProps implementation

export async function getStaticProps() {
  const destinations: Destination[] = [
    {
      name: 'Moon',
      images: {
        png: '/assets/destination/image-moon.png',
        webp: '/assets/destination/image-moon.webp',
      },
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travel: '3 days',
    },
    {
      name: 'Mars',
      images: {
        png: '/assets/destination/image-mars.png',
        webp: '/assets/destination/image-mars.webp',
      },
      description:
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 mil. km',
      travel: '9 months',
    },
    {
      name: 'Europa',
      images: {
        png: '/assets/destination/image-europa.png',
        webp: '/assets/destination/image-europa.webp',
      },
      description:
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 mil. km',
      travel: '3 years',
    },
    {
      name: 'Titan',
      images: {
        png: '/assets/destination/image-titan.png',
        webp: '/assets/destination/image-titan.webp',
      },
      description:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 bil. km',
      travel: '7 years',
    },
  ]

  return {
    props: {
      destinations,
    },
  }
}

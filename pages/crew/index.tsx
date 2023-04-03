import Layout from '@/components/Layout'
import { CrewMember } from '@/types/data'
import PageTitle from '@/components/pageTitle'
import MobileBackground from '@/public/assets/crew/background-crew-mobile.jpg'
import TabletBackground from '@/public/assets/crew/background-crew-tablet.jpg'
import DesktopBackground from '@/public/assets/crew/background-crew-desktop.jpg'
import CrewImage from '@/components/Crew/crewImage'
import { useState } from 'react'
import CrewData from '@/components/Crew/crewData'

export default function Crew({ crew }: { crew: CrewMember[] }) {
  const [activeCrewMember, setActiveCrewMember] = useState<CrewMember>(crew[0])
  return (
    <Layout
      desktopBackground={DesktopBackground}
      tabletBackground={TabletBackground}
      mobileBackground={MobileBackground}>
      <PageTitle pageNumber={'02'} pageTitle={'meet your crew'} />
      <div
        className={'mx-auto grid max-w-xs grid-cols-1 gap-4  md:max-w-[36rem]  lg:max-w-none lg:grid-cols-2 lg:gap-0'}>
        {crew.map(crewMember => (
          <CrewImage
            crewMember={crewMember}
            key={crewMember.name}
            isActive={activeCrewMember.name === crewMember.name}
          />
        ))}

        {/*  Crew selector*/}
        <div
          className={
            'flex flex-row items-center justify-center gap-4 lg:col-start-1 lg:row-span-1 lg:row-start-2 lg:justify-start lg:gap-6 '
          }>
          {crew.map(crewMember => (
            <button
              className={`h-2.5 w-2.5 rounded-full bg-secondary lg:h-4 lg:w-4  ${
                activeCrewMember.name === crewMember.name ? 'opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
              key={crewMember.name}
              onClick={() => setActiveCrewMember(crewMember)}></button>
          ))}
        </div>

        {crew.map(crewMember => (
          <CrewData
            crewMember={crewMember}
            key={crewMember.name}
            isActive={activeCrewMember.name === crewMember.name}
          />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const crew: CrewMember[] = [
    {
      name: 'Douglas Hurley',
      images: {
        png: '/assets/crew/image-douglas-hurley.png',
        webp: '/assets/crew/image-douglas-hurley.webp',
      },
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
      name: 'Mark Shuttleworth',
      images: {
        png: '/assets/crew/image-mark-shuttleworth.png',
        webp: '/assets/crew/image-mark-shuttleworth.webp',
      },
      role: 'Mission Specialist',
      bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
      name: 'Victor Glover',
      images: {
        png: '/assets/crew/image-victor-glover.png',
        webp: '/assets/crew/image-victor-glover.webp',
      },
      role: 'Pilot',
      bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
      name: 'Anousheh Ansari',
      images: {
        png: '/assets/crew/image-anousheh-ansari.png',
        webp: '/assets/crew/image-anousheh-ansari.webp',
      },
      role: 'Flight Engineer',
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
  ]

  return {
    props: {
      crew: crew,
    },
  }
}

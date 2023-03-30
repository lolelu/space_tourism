import Layout from '@/components/Layout'
import { Technologies } from '@/types/data'
import PageTitle from '@/components/pageTitle'
import MobileBackground from '@/public/assets/technology/background-technology-mobile.jpg'
import TabletBackground from '@/public/assets/technology/background-technology-tablet.jpg'
import DesktopBackground from '@/public/assets/technology/background-technology-desktop.jpg'

export default function Technology({ technologies }: { technologies: Technologies[] }) {
  return (
    <Layout
      desktopBackground={DesktopBackground}
      tabletBackground={TabletBackground}
      mobileBackground={MobileBackground}>
      <PageTitle pageNumber={'03'} pageTitle={'space launch 101'} />
    </Layout>
  )
}

export async function getStaticProps() {
  const technologies: Technologies[] = [
    {
      name: 'Launch vehicle',
      images: {
        portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
        landscape: './assets/technology/image-launch-vehicle-landscape.jpg',
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: 'Spaceport',
      images: {
        portrait: './assets/technology/image-spaceport-portrait.jpg',
        landscape: './assets/technology/image-spaceport-landscape.jpg',
      },
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
      name: 'Space capsule',
      images: {
        portrait: './assets/technology/image-space-capsule-portrait.jpg',
        landscape: './assets/technology/image-space-capsule-landscape.jpg',
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ]

  return {
    props: {
      destinations: technologies,
    },
  }
}

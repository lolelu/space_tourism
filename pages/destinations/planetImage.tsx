import { Destination } from '@/types/data'
import Image from 'next/image'
const PlanetImage = (props: { activeDestination: Destination; destination: Destination }) => (
  <div
    className={` col-start-1 row-start-1 transform justify-self-center transition-all duration-500 ease-in-out lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-1
              ${
                props.activeDestination.name === props.destination.name
                  ? 'scale-100 opacity-100 delay-500'
                  : 'scale-50 opacity-0 delay-0'
              }`}>
    <Image
      src={props.destination.images.webp}
      alt={props.destination.name + ' image'}
      className={
        'aspect-square h-[10.625rem] max-h-none w-[10.625rem] max-w-none md:h-[18.75rem] md:w-[18.75rem] lg:h-[27.8215rem] lg:w-[27.8215rem]'
      }
      width={445}
      height={445}
    />
  </div>
)

export default PlanetImage

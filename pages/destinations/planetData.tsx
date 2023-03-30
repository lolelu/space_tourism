import { Destination } from '@/types/data'

export const PlanetData = (props: {
  activeDestination: Destination
  destination: Destination
}) => (
  <div
    className={`col-start-1 row-start-3 flex origin-right flex-col items-center justify-center  gap-8 text-center transition-all duration-500 ease-in-out lg:col-start-2 lg:row-start-2 lg:transform lg:gap-12 lg:text-start 
    ${
      props.activeDestination.name === props.destination.name
        ? 'opacity-100 delay-500 lg:scale-x-100'
        : 'opacity-0 delay-0 lg:scale-x-0'
    }`}
  >
    <div>
      <h1
        className={
          'font-serif text-[3.5rem]/[4rem] uppercase md:text-[5rem]/[5.75rem] lg:text-[6.25rem]/[7.5rem]'
        }
      >
        {props.destination.name}
      </h1>
      <p
        className={
          'text-[0.9375rem]/[1.5625rem] text-secondary md:text-base lg:text-lg'
        }
      >
        {props.destination.description}
      </p>
    </div>
    <hr className={'border-1 w-full border-[#383B4B] '} />
    <div
      className={
        ' flex w-full flex-col items-center justify-center gap-8 md:flex-row md:justify-evenly md:gap-2'
      }
    >
      <div className={'basis-1/2 space-y-3'}>
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
      <div className={'basis-1/2 space-y-3'}>
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
  </div>
)

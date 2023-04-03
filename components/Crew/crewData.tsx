import { CrewMember } from '@/types/data'

const CrewData = ({ crewMember, isActive }: { crewMember: CrewMember; isActive: boolean }) => {
  return (
    <div
      className={`${
        isActive ? 'visible' : 'invisible'
      } col-start-1 row-start-3 flex max-w-[20rem] flex-col items-center justify-start justify-self-center  text-center md:row-start-1 md:max-w-[28.625rem] lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:max-w-none lg:items-start lg:justify-end lg:justify-self-stretch lg:text-start `}>
      <p
        className={
          'mb-2 font-serif text-base uppercase text-tertiary text-opacity-50 md:text-2xl/[1.75rem] lg:text-[2rem]/[2.25rem]'
        }>
        {crewMember.role}
      </p>
      <h4
        className={
          'mb-4 font-serif text-2xl/[1.75rem] uppercase text-tertiary md:text-[2.5rem]/[2.75rem] lg:text-[3.5rem]/[4rem]'
        }>
        {crewMember.name}
      </h4>
      <p className={'max-w-[27.75rem] text-[.9375rem]/[1.5625rem] text-secondary md:text-base/[1.75rem] lg:text-lg'}>
        {crewMember.bio}
      </p>
    </div>
  )
}

export default CrewData

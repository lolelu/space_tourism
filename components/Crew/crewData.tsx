import { CrewMember } from '@/types/data'

const CrewData = ({ crewMember, isActive }: { crewMember: CrewMember; isActive: boolean }) => {
  return (
    <div
      className={`${
        isActive ? 'visible' : 'invisible'
      } col-start-1 row-start-3 flex max-w-[20rem] flex-col items-center justify-start   justify-self-center text-center md:row-start-1 md:max-w-[28.625rem]  `}>
      <p className={'mb-2 font-serif text-base uppercase text-tertiary text-opacity-50 md:text-2xl/[1.75rem]'}>
        {crewMember.role}
      </p>
      <h4 className={'mb-4 font-serif text-2xl/[1.75rem] uppercase text-tertiary md:text-[2.5rem]/[2.75rem]'}>
        {crewMember.name}
      </h4>
      <p className={'text-[.9375rem]/[1.5625rem] text-secondary md:text-base/[1.75rem]'}>{crewMember.bio}</p>
    </div>
  )
}

export default CrewData

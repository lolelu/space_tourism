import { CrewMember } from '@/types/data'

const CrewData = ({ crewMember, isActive }: { crewMember: CrewMember; isActive: boolean }) => {
  return (
    <div
      className={`${
        isActive ? 'visible' : 'invisible'
      } col-start-1 row-start-3 flex flex-col items-center justify-center text-center     `}>
      <p className={'font-serif text-base uppercase text-tertiary text-opacity-50'}>{crewMember.role}</p>
      <h4 className={'font-serif text-2xl/[1.75rem] uppercase text-tertiary'}>{crewMember.name}</h4>
      <p className={'text-[.9375rem]/[1.5625rem] text-secondary'}>{crewMember.bio}</p>
    </div>
  )
}

export default CrewData

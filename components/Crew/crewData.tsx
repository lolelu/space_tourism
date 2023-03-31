import { CrewMember } from '@/types/data'

const CrewData = ({ crewMember, isActive }: { crewMember: CrewMember; isActive: boolean }) => {
  return (
    <div className={`${isActive ? 'visible' : 'invisible'} col-start-1 row-start-3   `}>
      <h4>{crewMember.name}</h4>
    </div>
  )
}

export default CrewData

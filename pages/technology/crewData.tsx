import { CrewMember } from '@/types/data'

const CrewData = ({ crewMember, isActive }: { crewMember: CrewMember; isActive: boolean }) => {
  return (
    <div>
      <h4>{crewMember.name}</h4>
    </div>
  )
}

export default CrewData

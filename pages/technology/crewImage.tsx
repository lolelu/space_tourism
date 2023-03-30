import Image from 'next/image'
import { CrewMember } from '@/types/data'

const CrewImage = ({ crewMember, isActive }: { crewMember: CrewMember; isActive: boolean }) => {
  return (
    <div className={`${isActive ? 'visible' : 'invisible'}`}>
      <Image src={crewMember.images.webp} alt={crewMember.name} width={300} height={300} />
    </div>
  )
}

export default CrewImage

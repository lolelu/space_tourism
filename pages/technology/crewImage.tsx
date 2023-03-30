import Image from 'next/image'
import { CrewMember } from '@/types/data'

const CrewImage = ({ crewMember, isActive }: { crewMember: CrewMember; isActive: boolean }) => {
  return (
    <div className={`${isActive ? 'visible' : 'invisible'} col-start-1 row-start-1`}>
      <Image src={crewMember.images.webp} alt={crewMember.name} width={300} height={300} className={'w-[11rem]'} />
    </div>
  )
}

export default CrewImage

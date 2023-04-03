import Image from 'next/image'
import { CrewMember } from '@/types/data'

const CrewImage = ({ crewMember, isActive }: { crewMember: CrewMember; isActive: boolean }) => {
  return (
    <div
      className={`${
        isActive ? 'visible' : 'invisible'
      } col-start-1 row-start-1 flex  flex-col items-center justify-end justify-self-stretch md:row-start-3 md:translate-y-6 md:transform lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:translate-y-8`}>
      <Image
        src={crewMember.images.webp}
        alt={crewMember.name}
        width={800}
        height={800}
        className={'h-[13.75rem] object-contain md:h-[33rem] lg:h-auto lg:max-h-[38rem]'}
      />

      <hr className={' w-full  border-tertiary border-opacity-50 md:hidden'} />
    </div>
  )
}

export default CrewImage

import Link from 'next/link'

export const ExploreButton = ({ onClick }: { onClick?: () => void }) => (
  <Link
    className={
      'group relative z-10 flex h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-tertiary  md:h-[15.125rem] md:w-[15.125rem] lg:h-[17.125rem] lg:w-[17.125rem]'
    }
    href={'/destinations'}
  >
    <div
      className={
        'absolute -inset-0 -z-10 h-full w-full transform rounded-full  bg-tertiary/10 transition-all duration-500 ease-in-out group-hover:scale-[160%]  '
      }
    ></div>
    <h3 className={'font-serif text-lg text-primary md:text-[2rem]/[2.25rem]'}>
      EXPLORE
    </h3>
  </Link>
)

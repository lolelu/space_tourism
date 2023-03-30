import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuLink = ({
  linkUrl,
  linkNumber,
  linkName,
}: {
  linkUrl: string
  linkNumber: string
  linkName: string
}) => {
  //   Check if the link is active
  const router = useRouter()
  const isActive = router.pathname === linkUrl
  return (
    <li
      className={
        'flex h-full w-full items-start justify-start md:flex-col md:items-center md:justify-center'
      }
    >
      <Link
        href={linkUrl}
        className={
          'group relative flex grow gap-3 text-tertiary md:grow-0  md:items-center md:justify-center'
        }
      >
        <p
          className={
            'font-condensed text-base font-bold tracking-subtitle md:hidden lg:block'
          }
        >
          {linkNumber}
        </p>
        <p
          className={`flex-grow font-condensed text-base uppercase md:text-sm lg:text-base `}
        >
          {linkName}
        </p>
        <div
          className={` absolute bottom-0 right-0 top-0 w-1 bg-white md:-bottom-9 md:left-0 md:top-auto md:h-1 md:w-auto ${
            !isActive && 'invisible'
          }`}
        ></div>
        <div
          className={` absolute bottom-0 right-0 top-0 w-1 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-50 md:-bottom-9 md:left-0 md:top-auto md:h-1 md:w-auto ${
            isActive && 'invisible'
          }`}
        ></div>
      </Link>
    </li>
  )
}

export default MenuLink

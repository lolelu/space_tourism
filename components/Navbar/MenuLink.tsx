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
          'relative flex grow gap-3 text-tertiary md:grow-0  md:items-center md:justify-center'
        }
      >
        <p className={'text-md font-condensed font-bold md:hidden lg:block'}>
          {linkNumber}
        </p>
        <p className={`flex-grow font-condensed uppercase `}>{linkName}</p>
        <div
          className={`absolute right-0 top-0 bottom-0 w-1 bg-white md:top-auto md:left-0 md:-bottom-9 md:h-1 md:w-auto ${
            !isActive && 'hidden'
          }`}
        ></div>
      </Link>
    </li>
  )
}

export default MenuLink

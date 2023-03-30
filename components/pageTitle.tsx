const PageTitle = ({
  pageNumber,
  pageTitle,
}: {
  pageNumber: string
  pageTitle: string
}) => (
  <h2
    className={
      'mb-8 mt-10 text-center font-condensed uppercase tracking-subtitle text-tertiary md:mb-[3.75rem] md:text-start md:text-xl/[1.5rem] '
    }
  >
    <span className={'font-bold opacity-25'}>{pageNumber}</span> {pageTitle}
  </h2>
)

export default PageTitle

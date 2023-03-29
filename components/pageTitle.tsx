const PageTitle = ({
  pageNumber,
  pageTitle,
}: {
  pageNumber: string
  pageTitle: string
}) => (
  <h2
    className={
      'mb-4 text-center font-condensed uppercase tracking-subtitle text-tertiary'
    }
  >
    <span className={'font-bold opacity-25'}>{pageNumber}</span> {pageTitle}
  </h2>
)

export default PageTitle

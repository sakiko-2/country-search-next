import Link from 'next/link'
import styled from 'styled-components'

const StyledSpan = styled.span`
  min-width: 5.5rem;
  @media (min-width: 640px) {
    min-width: 7rem;
  }
`

export default function ButtonLink({item, name}) {
  return (
    <StyledSpan className="m-0.5 inline-block rounded border bg-[color:var(--light-primary-color)] px-4 py-1 text-center text-sm drop-shadow-md dark:border-[color:var(--light-text-color)] dark:bg-[color:var(--dark-primary-color)] dark:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] dark:focus:border-indigo-500 dark:focus:outline-0 sm:text-base">
      <Link href={`/country/${item}`}>{name(item)}</Link>
    </StyledSpan>
  )
}

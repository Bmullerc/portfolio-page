import { Spinner } from 'phosphor-react'

export function Loader() {
  return (
    <>
      <Spinner size={32} />
      <p>Loading.</p>
    </>
  )
}
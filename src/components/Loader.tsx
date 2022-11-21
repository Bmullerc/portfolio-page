import { Spinner } from 'phosphor-react'

export function Loader() {
  return (
    <div className='fixed bg-zinc-500'>
      <Spinner size={32} />
      <p>Loading.</p>
    </div>
  )
}
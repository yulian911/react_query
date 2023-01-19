import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getWord } from './api/posts'

const Word = ({ id }) => {
  const { data, status, error } = useQuery({
    queryKey: ['words', id],
    queryFn: () => getWord(id),
    // staleTime:1000  co ile ma odswieżac
    // refetchInterval: 15000,
  })
  if (status === 'loading') return <h1>Loading...</h1>
  if (status === 'error') {
    ;<h1>{JSON.stringify(error)}</h1>
  }
  console.log(data)

  return (
    <div>
      <p>{data.pl}</p>
      <p>{data.eng}</p>
    </div>
  )
}

export default Word

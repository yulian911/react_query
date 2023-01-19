import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getWords } from './api/posts'

const PolishWords = () => {
  const { data, status, error } = useQuery({
    queryKey: ['words'],
    queryFn: getWords,
    // staleTime:1000  co ile ma odswieżac
    refetchInterval: 15000,
  })

  if (status === 'loading') return <h1>Loading...</h1>
  if (status === 'error') {
    ;<h1>{JSON.stringify(error)}</h1>
  }
  return (
    <div>
      <h1>Polsko-Angielski</h1>
      <ol>
        {data?.data.map(el => (
          <li key={el.id}>
            {el.pl}-{el.eng}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default PolishWords

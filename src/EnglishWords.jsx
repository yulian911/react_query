import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getWords } from './api/posts'

const EnglishWords = () => {
  const { data, status, error } = useQuery({
    queryKey: ['words'],
    queryFn: getWords,
  })

  if (status === 'loading') return <h1>Loading...</h1>
  if (status === 'error') {
    ;<h1>{JSON.stringify(error)}</h1>
  }
  return (
    <div>
      <h1>English-Polish</h1>
      <ol>
        {data?.data.map(el => (
          <li key={el.id}>
            {el.eng}-{el.pl}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default EnglishWords

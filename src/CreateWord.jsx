import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useRef } from 'react'
import { createWord } from './api/posts'
import Word from './Word'

const CreateWord = ({ setCurrentPage }) => {
  const engRef = useRef()
  const plRef = useRef()
  const queryClient = useQueryClient()
  const createWordMutation = useMutation({
    mutationFn: createWord,
    onSuccess: data => {
      queryClient.setQueryData(['words', data.id], data)
      queryClient.invalidateQueries(['words'], { exact: true })
      setCurrentPage(<Word id={data.id} />)
    },
  })

  function handleSubmit(e) {
    e.preventDefault()
    createWordMutation.mutate({
      eng: engRef.current.value,
      pl: plRef.current.value,
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Eng</label>
          <input id="eng" ref={engRef} />
        </div>
        <div>
          <label htmlFor="body">PL</label>
          <input id="pl" ref={plRef} />
        </div>
        <button disabled={createWordMutation.isLoading}>
          {createWordMutation.isLoading ? 'Loading...' : 'Create'}
        </button>
      </form>
    </div>
  )
}

export default CreateWord

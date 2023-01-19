import axios from 'axios'

export function getWords() {
  return axios.get('http://localhost:3001/words', { params: { _sort: 'pl' } })
}
export function getWord(id) {
  return axios.get(`http://localhost:3001/words/${id}`).then(res => res.data)
}

export function createWord({ pl, eng }) {
  return axios
    .post('http://localhost:3001/words', {
      pl,
      eng,
    })
    .then(res => res.data)
}

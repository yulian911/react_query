import axios from 'axios';

export function getWords() {
  return axios.get('http://localhost:3001/words', { params: { _sort: 'pl' } });
}
export function getWord(id) {
  return axios.get(`http://localhost:3001/words/${id}`).then(res => res.data);
}

export async function getPostsPaginated(page) {
  const res = await axios.get('http://localhost:3000/posts', {
    params: { _page: page, _sort: 'title', _limit: 2 },
  });
  const hasNext = page * 2 <= parseInt(res.headers['x-total-count']);
  return {
    nextPage: hasNext ? page + 1 : undefined,
    previousPage: page > 1 ? page - 1 : undefined,
    posts: res.data,
  };
}

export function createWord({ pl, eng }) {
  return axios
    .post('http://localhost:3001/words', {
      pl,
      eng,
    })
    .then(res => res.data);
}

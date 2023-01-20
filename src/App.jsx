import { useState } from 'react';
import './App.css';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PolishWords from './PolishWords';
import EnglishWords from './EnglishWords';
import Word from './Word';
import CreateWord from './CreateWord';
import { PostListPaginated } from './PostListPaginated';
import { PostListInfinite } from './PostListInfinite';

const App = () => {
  const [currentPage, setCurrentPage] = useState(<PolishWords />);
  return (
    <div>
      <div>
        <button onClick={() => setCurrentPage(<PolishWords />)}>Polsko-Angielski</button>
        <button onClick={() => setCurrentPage(<EnglishWords />)}>English-Polish</button>
        <button onClick={() => setCurrentPage(<Word id={1} />)}>Word</button>
        <button onClick={() => setCurrentPage(<CreateWord setCurrentPage={setCurrentPage} />)}>
          Stworzyc
        </button>
        <button onClick={() => setCurrentPage(<PostListPaginated />)}>Post List Paginated</button>
        <button onClick={() => setCurrentPage(<PostListInfinite />)}>Post List Infinite</button>
      </div>
      <div>{currentPage}</div>
    </div>
  );
};
export default App;

// const POSTS = [
//   { id: 1, title: 'Post 1' },
//   { id: 2, title: 'Post 2' },
//   { id: 3, title: 'Post 3' },
// ]

// const wait = time => {
//   return new Promise(resolve => setTimeout(resolve, time))
// }
//  Podstawy examples
// function App() {
//   const queryClient = useQueryClient();
//   const postQuery = useQuery({
//     queryKey: ['posts'],
//     queryFn: () => wait(1000).then(() => [...POSTS]),
//   });

//   const newPostMutation = useMutation({
//     mutationFn: title => {
//       return wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), title }));
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries('posts');
//     },
//   });

//   if (postQuery.isLoading) {
//     return <h1>Loading...</h1>;
//   }
//   if (postQuery.isError) {
//     return <pre>{JSON.stringify(postQuery.error)}</pre>;
//   }
//   console.log(postQuery.data);
//   return (
//     <div className="App">
//       {postQuery.data.map(el => (
//         <h1>{el.title}</h1>
//       ))}
//       <button disabled={postQuery.isLoading} onClick={() => newPostMutation.mutate('New Year')}>
//         Dodaj Post
//       </button>
//     </div>
//   );
// }

// query keys !!
// /posts -> ["posts"]
// /posts/1 -> ["posts", post.id]
// / posts?autorId=1 -> ["posts",{authorId:1}]
// /posts/2/comments -> ["posts",post.id,"comments"]

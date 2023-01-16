import Loader from 'components/Loader/Loader';
import { useState, useEffect, useCallback } from 'react';
import Failure from 'components/Failure/Failure';
import { Section } from './Posts.styled';
import { Link } from 'react-router-dom';
import { getPosts } from 'services/API';
import { PostList } from 'components/PostList/PostList';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getPosts(page, limit);
      setPosts(prev => [...prev, ...data]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost, page]);

  const onClickHandler = () => {
    setPage(prev => prev + 1);
  };
  console.log(posts);
  return (
    <Section>
      <h1>Posts</h1>
      {loading && <Loader />}
      {error && <Failure error={error.message} />}
      {posts.length > 0 && (
        <>
          <PostList posts={posts} />
          {posts.length < 100 && (
            <button type="button" onClick={onClickHandler}>
              Load more
            </button>
          )}
        </>
      )}
    </Section>
  );
};

export default Posts;

// export default class Posts extends Component {
//   state = {
//     posts: [],
//     page: 1,
//     limit: 30,
//     loading: false,
//     error: null,
//   };
//   componentDidMount() {
//     this.fetchPosts();
//   }
//   componentDidUpdate(_, prevState) {
//     if (prevState.page !== this.state.page) {
//       this.fetchPosts();
//     }
//   }
//   async fetchPosts() {
//     const { page, limit } = this.state;

//     this.setState({ loading: true });
//     try {
//       const data = await getPosts(page, limit);
//       this.setState((prevState) => ({ posts: [...prevState.posts, ...data] }));
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }
//   onClickHandler = () => {
//     this.setState((prevState) => ({ page: prevState.page + 1 }));
//   };
//   render() {
//     const { posts, loading, error } = this.state;
//     return (
//       <div>
//         {loading && <Loader />}
//         {error && <Failure error={error.message} />}
//         {posts.length > 0 && (
//           <>
//             <ul>
//               {posts.map(({ title, body }, index) => (
//                 <li key={index}>
//                   <p>{title}</p>
//                   <p>{body}</p>
//                 </li>
//               ))}
//             </ul>
//             {posts.length < 100 && (
//               <button type="button" onClick={this.onClickHandler}>
//                 Load more
//               </button>
//             )}
//           </>
//         )}
//       </div>
//     );
//   }
// }

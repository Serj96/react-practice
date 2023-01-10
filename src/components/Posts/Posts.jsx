import getPosts from 'services/API';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import Failure from 'components/Failure/Failure';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [page]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const data = await getPosts(page, limit);
      setPosts(prev => [...prev, ...data]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const onClickHandler = () => {
    setPage(prev =>  prev + 1 );
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Failure error={error.message} />}
      {posts.length > 0 && (
        <>
          <ul>
            {posts.map(({ title, body }, index) => (
              <li key={index}>
                <p>{title}</p>
                <p>{body}</p>
              </li>
            ))}
          </ul>
          {posts.length < 100 && (
            <button type="button" onClick={onClickHandler}>
              Load more
            </button>
          )}
        </>
      )}
    </div>
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

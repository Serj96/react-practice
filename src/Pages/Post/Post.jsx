import { getPostById } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

export function Post() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = useParams();
  console.log(useParams());
  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const post = await getPostById(postId);
        setPost(post);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [error, postId]);
  const onClickHandler = () => {
    navigate(location?.state.from ?? '/');
  };
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {post?.id && (
        <>
          <button type="button" onClick={onClickHandler}>
            Back
          </button>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

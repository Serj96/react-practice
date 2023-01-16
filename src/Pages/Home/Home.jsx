import Loader from 'components/Loader/Loader';
import { useState, useEffect, useCallback } from 'react';
import { getPosts } from 'services/API';
import { Section } from '../Posts/Posts.styled';
import Failure from 'components/Failure/Failure';
import { PostList } from 'components/PostList/PostList';

export function Home() {
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
}

import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export async function getPosts(page = 1, limit = 10) {
  const { data } = await axios.get('/posts', {
    params: {
      _page: page,
      _limit: limit,
    },
  });

  return data;
}
export async function getPostById(postId) {
  const { data } = await axios.get(`/posts/${postId}`);

  return data;
}

export async function getPostBySearch(q) {
  const { data } = await axios.get('/posts', {
    params: {
      q,
    },
  });
  return data;
}

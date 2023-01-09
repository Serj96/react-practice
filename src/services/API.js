import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export default async function getPosts(page = 1, limit = 10) {
  const { data } = await axios.get("/posts", {
    params: {
      _page: page,
      _limit: limit,
    },
  });

  return data;
}

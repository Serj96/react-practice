import { Component } from "react";
import getPosts from "services/API";
export default class Posts extends Component {
  state = {
    posts: [],
    page: 1,
    limit: 10,
    loading: false,
    error: null,
  };
  componentDidMount() {
    this.fetchPosts();
  }
  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchPosts();
    }
  }
  async fetchPosts() {
    const { page, limit } = this.state;

    this.setState({ loading: true });
    try {
      const data = await getPosts(page, limit);
      this.setState((prevState) => ({ posts: [...prevState.posts, ...data] }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  onClickHandler = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
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
            <button type="button" onClick={this.onClickHandler}>
              Load more
            </button>
          </>
        )}
      </div>
    );
  }
}

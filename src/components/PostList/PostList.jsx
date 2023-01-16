import { Link } from 'react-router-dom';
import { List, Item, Title } from './PostList.styled';

export function PostList({ posts }) {
  return (
    <List>
      {posts.map(({ title, id }, index) => (
        <Item key={index}>
          <Link to={`/posts/${id}`}>
            <Title>{title}</Title>
          </Link>
        </Item>
      ))}
    </List>
  );
}

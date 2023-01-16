import { Link } from 'react-router-dom';
import { List, Item, Title } from './PostList.styled';
import { useLocation } from 'react-router-dom';

export function PostList({ posts }) {
  const location = useLocation();

  return (
    <List>
      {posts.map(({ title, id }, index) => (
        <Item key={index}>
          <Link to={`/posts/${id}`} state={{ from: location }}>
            <Title>{title}</Title>
          </Link>
        </Item>
      ))}
    </List>
  );
}

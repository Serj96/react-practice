import { memo } from 'react';
import { Item, Data, Button } from './UserItem.styled';
function UserItem({ name, phone, onHandelDelete, id }) {
  console.log('render:', name);
  return (
    <Item>
      <Data>{name}:</Data>
      <Data>{phone}</Data>
      <Button type="button" onClick={() => onHandelDelete(id)}>
        Delete
      </Button>
    </Item>
  );
}
export default memo(UserItem);

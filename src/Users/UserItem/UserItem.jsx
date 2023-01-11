import { memo } from 'react';
function UserItem({ name, phone }) {
  console.log('render:', name);
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button type="button">Delete</button>
    </div>
  );
}
export default memo(UserItem);

import { memo } from 'react';
function UserItem({ name, phone, onHandelDelete, id }) {
  console.log('render:', name);
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button type="button" onClick={() => onHandelDelete(id)}>
        Delete
      </button>
    </div>
  );
}
export default memo(UserItem);



export function UserList({users, onHandelDelete}) {
    return (
        <ul>
            {users.map(user => <li key={user.id}><p>Name: {user.name}</p><p>Phone: {user.phone}</p>
            <button type="button" onClick={() => onHandelDelete(user.id)}>Delete</button> </li>)}
        </ul>
    )
}


export function UserList({users}) {
    return (
        <ul>
        {users.map(user => <li key={user.id}><p>Name: {user.name}</p><p>Phone: {user.phone}</p></li>)}
        </ul>
    )
}
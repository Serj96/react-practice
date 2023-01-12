import { useState } from 'react';
export default function AuthForm({ onSubmit }) {
  const [state, setState] = useState({ name: '', email: '' });
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(state);
    setState({ name: '', email: '' });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.name}
          name="name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          value={state.email}
          name="email"
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}

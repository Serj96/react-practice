import { useState } from 'react';
import useForm from 'hooks/useForm';

const initialState = { name: '', email: '' };

export default function AuthForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  // const [state, setState] = useState(initialState);

  // const handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   setState(prev => ({ ...prev, [name]: value }));
  // };
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onSubmit(state);
  //   setState(initialState);
  // };
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

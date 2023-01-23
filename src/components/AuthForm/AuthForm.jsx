// import { useState } from 'react';
import useForm from 'hooks/useForm';

const initialLoginState = { email: '', password: '' };
const initialSignUpState = { name: '', email: '', password: '' };

export default function AuthForm({ onSubmit, isSignUp }) {
  const initialState = isSignUp ? initialSignUpState : initialLoginState;
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
        {isSignUp && (
          <input
            type="text"
            value={state.name}
            name="name"
            onChange={handleChange}
          />
        )}

        <input
          type="email"
          value={state.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={state.email}
          name="password"
          onChange={handleChange}
        />

        <button>{isSignUp ? 'Sign up' : 'Login'}</button>
      </form>
    </>
  );
}

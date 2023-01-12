import { useState } from 'react';

export default function useForm({ onSubmit, initialState }) {
  const [state, setState] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(state);
    setState(initialState);
  };

  return { state, handleChange, handleSubmit };
}

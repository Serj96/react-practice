import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button disabled={!query.trim()}>Search</button>
      </form>
    </div>
  );
};

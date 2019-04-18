// External Dependencies
import React, { useContext } from 'react';
import { Context } from '../context';

// Local Variables
const Person = () => {
  const context = useContext(Context);
  const { data } = context.state.person;

  return (
    <>
      <h2>Selected Person:</h2>
      {data && (
        <h3>{data.name}</h3>
      )}
    </>
  )
}

export default Person;

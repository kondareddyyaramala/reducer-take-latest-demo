// External Dependencies
import React, { useContext } from 'react';
import { Context } from '../context';

// Local Variables
const LatestResponse = () => {
  const context = useContext(Context);
  const { data } = context.state.latestResponse;

  return (
    <>
      <h2>Latest Response:</h2>
      {data && (
        <h3>{data.name}</h3>
      )}
    </>
  )
}

export default LatestResponse;

// External Dependencies
import React, { useContext } from 'react';
import { Context } from '../context';
import { useLoadPeople, getUser } from '../context/fetcher';

// Local Variables
const People = () => {
  const context = useContext(Context);

  useLoadPeople(context);

  const handleGetUser = (userId, delay = false) => () => {
    getUser(context, userId, delay)
  }

  return (
    <ul>
      {context.state.people.data.map(person => {
        const urlArr = person.url.split('/')
        const userId = urlArr[urlArr.length - 2];
        return (
          <li key={person.url}>
            <span>
              {person.name}
            </span>

            <span>
              <button onClick={handleGetUser(userId, true)}>
                Get Slow
              </button>

              <button onClick={handleGetUser(userId)}>
                Get Fast
              </button>
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default People;

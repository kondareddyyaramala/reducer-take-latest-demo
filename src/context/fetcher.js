import { useEffect } from 'react';

import { ACTION_TYPES } from './actions';

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

class Fetcher {
  getUser = async (context, userId, delay = false) => {
    const requestId = Date.now();
    this.getUserId = requestId;

    if (delay) {
      await sleep(5000)
    }

    try {
      const response = await fetch(`https://swapi.co/api/people/${userId}`);
      const data = await response.json();

      console.log('RESPONSE', data.name);

      if (requestId === this.getUserId) {
        context.dispatch({
          payload: {
            data,
          },
          type: ACTION_TYPES.PERSON_GET_SUCCESS
        });
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  getUsers = async (context) => {
    const requestId = Date.now();
    this.getUsersId = requestId;

    try {
      const response = await fetch('https://swapi.co/api/people');
      const data = await response.json();

      if (requestId === this.getUsersId) {
        context.dispatch({
          payload: {
            data: data.results,
          },
          type: ACTION_TYPES.PEOPLE_GET_SUCCESS
        });
      }
    } catch (error) {
      console.error(error)
    }
  }
    
}

const fetcher = new Fetcher();

export const useLoadPeople = (context) => {
  useEffect(() => {
    fetcher.getUsers(context)
  }, [])
}

export const getUser = (context, userId, delay) => {
  fetcher.getUser(context, userId, delay);
}

export const ACTION_TYPES = {
  PEOPLE_GET_SUCCESS: 'PEOPLE_GET_SUCCESS',
  PERSON_GET_SUCCESS: 'PERSON_GET_SUCCESS',
}
export const actions = {
  [ACTION_TYPES.PEOPLE_GET_SUCCESS]: (state, action) => ({
    ...state,
    people: {
      ...state.people,
      ...action.payload,
    }
  }),
  [ACTION_TYPES.PERSON_GET_SUCCESS]: (state, action) => ({
    ...state,
    person: {
      ...state.person,
      ...action.payload,
    }
  }),
}

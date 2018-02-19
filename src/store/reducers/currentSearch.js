/* -----------------    ACTIONS     ------------------ */

const SET_SEARCH = 'SET_SEARCH'

/* ------------   ACTION CREATORS     ------------------ */

export const setSearch = data => ({type: SET_SEARCH, data})


/* ------------       REDUCER     ------------------ */

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        currentSearch: action.data
      }
    default:
      return state
  }
}
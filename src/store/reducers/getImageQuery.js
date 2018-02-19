import axios from 'axios'
import KEY from '../../../apikey'

/* -----------------    ACTIONS     ------------------ */

const GET_IMAGES = 'GET_IMAGES'

/* ------------   ACTION CREATORS     ------------------ */

const get = data => ({ type: GET_IMAGES, data })

/* ------------       REDUCER     ------------------ */

export default function reducer(state = [], action) {
  switch (action.type) {
  case GET_IMAGES:
    return action.data
  default:
    return state
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const getImageQueryResults = (query, page = 1) => dispatch => {
  axios.get(`https://pixabay.com/api/?key=${KEY}&q=${encodeURI(query)}&webformatURL='_960'&per_page=200&page=${page}`)
       .then(res => {
         dispatch(get(res.data))
       })
}

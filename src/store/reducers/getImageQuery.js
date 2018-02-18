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

export const getImageQueryResults = query => dispatch => {
  axios.get(`https://pixabay.com/api/?key=${KEY}&q=${encodeURI(query)}&webformatURL='_960`)
       .then(res => {
         dispatch(get(res.data))
       })
}

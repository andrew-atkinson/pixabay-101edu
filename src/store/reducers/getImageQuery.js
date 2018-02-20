import axios from 'axios'
import KEY from '../../../apikey'

/* -----------------    ACTIONS     ------------------ */

const GET_IMAGES = 'GET_IMAGES'

/* ------------   ACTION CREATORS     ------------------ */

const get = (query) => ({type: GET_IMAGES, query})

/* ------------       REDUCER     ------------------ */

export default function reducer(query = {hits: [], page: 1}, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        total: action.query.total,
        hits: query.hits.concat(action.query.hits),
        page: action.query.page
      }
    default:
      return query
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const getImageQueryResults = query => dispatch => {
  axios.get(`https://pixabay.com/api/?key=${KEY}&q=${encodeURI(query.text)}&webformatURL='_960'&per_page=20&page=${query.page}`)
  .then(res => {
    dispatch(get({hits:res.data.hits, total:res.data.total, page:query.page}))
  })
}
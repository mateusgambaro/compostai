import { HYDRATE } from 'next-redux-wrapper'
import { SAVE_SONG_REQUEST } from '../../actions'

const initialState = {
  id: 0,
  name: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case SAVE_SONG_REQUEST:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer

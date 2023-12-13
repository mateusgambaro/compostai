import { HYDRATE } from 'next-redux-wrapper'
import { SAVE_COMPOST_DATA } from '../../actions'

const initialState = {
  name: '',
  quantity: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case SAVE_COMPOST_DATA:
      return {...action.payload }
    default:
      return state
  }
}

export default reducer

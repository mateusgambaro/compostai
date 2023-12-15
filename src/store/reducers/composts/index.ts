import { HYDRATE } from 'next-redux-wrapper'
import { SAVE_COMPOST_DATA } from '../../actions'
import { REHYDRATE } from 'redux-persist'

const initialState = {
  CompostData: {
    name: '',
    quantity: ''
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return { ...state, ...action.payload }
    case SAVE_COMPOST_DATA:
      return {...action.payload }
    default:
      return state
  }
}

export default reducer

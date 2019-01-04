import { UPDATE_CONFIG } from '../constants/ActionTypes'

const initialState = {
  theme: localStorage.getItem('theme')||'light'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case UPDATE_CONFIG:
    return { ...state, ...payload }
  default:
    return state
  }
}
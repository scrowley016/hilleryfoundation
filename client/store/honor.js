import axios from 'axios'

const GET_HONOR = 'GET_HONOR'

const addHonor = honoree => {
  return {
    type: GET_HONOR,
    honoree
  }
}

export const fetchHonoree = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/honor')
      dispatch(addHonor(data))
    } catch (error) {
      dispatch(console.error(error))
    }
  }
}

const initialState = {
  honoree: []
}

export default function honorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HONOR:
      return {...state, honoree: action.honoree}
    default:
      return state
  }
}

const numberReducer = (state = { number: 1 }, action) => {
  switch(action.type) {
    case 'ADD_NUMBER':
      return { ...state, number : state.number + action.value}

    case 'SUB_NUMBER':
      return { ...state, number : state.number - action.value }
    
    default:
      break
  }
  return state;
}

export default numberReducer;
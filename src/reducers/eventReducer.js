const eventReducer = (state, action) => {
    switch(action.type){
        case "GET_ALL_EVENTS":
    return {
      ...state,
      event:action.payload,
     loading:false
        }
        default: 
        return state
}
}


export default eventReducer;
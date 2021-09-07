export const eventsReducer = (state, action) => {
  switch (action.type) {
    case "GET_EVENTS":
      return {
        ...state,
        loading: false,
        events: action.payload,
      };
    case "ADD_EVENT":
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    default:
      return state;
  }
};

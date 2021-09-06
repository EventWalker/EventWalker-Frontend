const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isPending: false,
        user: action.payload,
      };
    case "REGISTER_USER":
      return {
        ...state,
        isPending: false,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isPending: false,
        user: null,
      };

    default:
      return state;
  }
};

export default usersReducer;

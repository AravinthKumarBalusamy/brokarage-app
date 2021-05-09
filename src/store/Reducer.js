export const initialState = {
  userName: null,
  role: null,
  isAdmin: false,
  alertType: {
    header: null,
    message: null,
    type: null,
    pathname: "/",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ROLE":
      return {
        ...state,
        user: action.user.userName,
        role: action.user.role,
        isAdmin: action.user.role === "admin",
      };
    case "SET_SIGNIN_SUCCESS":
      return {
        ...state,
        alertType: { ...action.payload },
      };
    case "SET_PATH":
      return {
        ...state,
        pathname: action.name,
      };
    default:
      return state;
  }
}

export default reducer;

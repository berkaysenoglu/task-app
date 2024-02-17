const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "CHANGE_USER_NAME":
      return {
        ...state,
        users: state.users.map((user, index) =>
          index === action.payload.idx
            ? { ...user, name: action.payload.newName }
            : user
        ),
      };
    default:
      return state;
  }
};

export default userReducer;

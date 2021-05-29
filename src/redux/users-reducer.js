const ACTIVE = "ACTIVE";
const NOTACTIVE = "NOTACTIVE";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, isActive: true };
          }
          return u;
        }),
      };
    case NOTACTIVE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, isActive: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const activeAC = (userId) => ({ type: ACTIVE, userId });

export const notactiveAC = (userId) => ({ type: NOTACTIVE, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;

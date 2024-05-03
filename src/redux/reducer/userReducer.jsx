import { FETCH_USER_LOGIN_SUCCESS, LOGOUT_USER } from "../action/userAction";

const INITIAL_STATE = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    role: "",
    email: "",
    image: ""
  },
  isAuthenticated: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case FETCH_USER_LOGIN_SUCCESS: 
      return {
        ...state, 
        account: {
          access_token: action.payload.access_token,
          refresh_token: action.payload.refresh_token,
          username: action.payload.username,
          role: action.payload.role,
          email: action.payload.email,
          image: action.payload.image,
        },
        isAuthenticated: true
      }
    case LOGOUT_USER:
        return {
          ...state,
          account: {
            access_token: "",
            refresh_token: "",
            username: "",
            role: "",
            email: "",
            image: ""
          },
          isAuthenticated: false
        }
    default: return state;
  }
}

export default userReducer;
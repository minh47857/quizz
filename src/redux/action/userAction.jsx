export const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER_LOGIN_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER"

export const doLogin = (data) => {
  return {
    type: FETCH_USER_LOGIN_SUCCESS,
    payload: data
  }
}

export const doLogout = () => {
  return {
    type: LOGOUT_USER
  }
}
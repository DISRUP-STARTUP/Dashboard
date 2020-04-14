import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR, LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR } from '../configActions';
const initState = { login: window.localStorage.getItem('logedIn'), loading: false, error: null };
const authReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...initState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...initState,
        login: data,
        loading: false,
      };
    case LOGIN_ERR:
      return {
        ...initState,
        error: err,
        loading: false,
      };
    case LOGOUT_BEGIN:
      return {
        ...initState,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initState,
        login: data,
        loading: false,
      };
    case LOGOUT_ERR:
      return {
        ...initState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};
export default authReducer;

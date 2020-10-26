import actions from './actions';

const { FB_LOGIN_BEGIN, FB_LOGIN_SUCCESS, FB_LOGIN_ERR, FB_LOGOUT_BEGIN, FB_LOGOUT_SUCCESS, FB_LOGOUT_ERR } = actions;

const initialState = {
  data: null,
  loading: false,
  isLogout: false,
  error: false,
};

const firebaseAuth = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FB_LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FB_LOGIN_SUCCESS:
      return {
        ...state,
        data,
        error: false,
        loading: false,
      };

    case FB_LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case FB_LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FB_LOGOUT_SUCCESS:
      return {
        ...state,
        data,
        isLogout: true,
        error: false,
        loading: false,
      };

    case FB_LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
        isLogout: false,
      };

    default:
      return state;
  }
};

export default firebaseAuth;

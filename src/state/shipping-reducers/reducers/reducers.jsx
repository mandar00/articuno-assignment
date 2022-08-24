import * as types from "../types"  

const initialState = {
  loading: false,
  success: false,
  error: false,
};

const update = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    case types.FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};

export default update
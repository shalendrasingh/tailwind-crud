import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  step: 1,
  isError: false,
  lawyer: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_FORM_STATE:
      return {
        ...state,
        step: payload,
      };
    case types.GET_ALL_LAWYER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_ALL_LAWYER_SUCCESS:
      return {
        ...state,
        lawyer: payload.data,
        isLoading: false,
        isError: false,
      };
    case types.GET_ALL_LAWYER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_LAWYER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.UPDATE_LAWYER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.UPDATE_LAWYER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.LAWYER_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.LAWYER_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.LAWYER_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.ADD_LAWYER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_LAWYER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.ADD_LAWYER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export { reducer };

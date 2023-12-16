import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  step: 1,
  isError: false,
  jobs: [],
  job: {},
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_FORM_STATE:
      return {
        ...state,
        step: payload,
      };
    case types.EDIT_JOB_DATA:
      return {
        ...state,
        job: payload,
      };
    case types.GET_ALL_JOB_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_ALL_JOB_SUCCESS:
      return {
        ...state,
        jobs: payload.data,
        isLoading: false,
        isError: false,
      };
    case types.GET_ALL_JOB_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_JOB_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.UPDATE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.UPDATE_JOB_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.JOB_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.JOB_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.JOB_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.ADD_JOB_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.ADD_JOB_FAILURE:
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

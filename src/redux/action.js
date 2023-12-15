import axios from "axios";
import * as types from "./actionTypes";

export const getFormStep = (payload) => (dispatch) => {
  return dispatch({ type: types.UPDATE_FORM_STATE, payload });
};

export const addLawyer = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_LAWYER_REQUEST });
  const authToken = JSON.parse(localStorage.getItem("token")) || "";
  return axios
    .post(`https://lawyerb.onrender.com/api/addLawyer`, payload, {
      headers: {
        Authorization: `${authToken}`,
      },
    })
    .then((r) => {
      dispatch({ type: types.ADD_LAWYER_SUCCESS, payload: r });
      return r;
    })
    .catch((e) => {
      dispatch({ type: types.ADD_LAWYER_FAILURE, payload: e });
    });
};

export const getAllLawyer = (payload) => (dispatch) => {
  dispatch({ type: types.GET_ALL_LAWYER_REQUEST });
  return axios
    .get(`https://lawyerb.onrender.com/api/allLawyer`, {})
    .then((r) => {
      dispatch({ type: types.GET_ALL_LAWYER_SUCCESS, payload: r });
      return r;
    })
    .catch((e) => {
      dispatch({ type: types.GET_ALL_LAWYER_FAILURE, payload: e });
      return e;
    });
};
export const updateLawyer = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_LAWYER_REQUEST });
  const authToken = JSON.parse(localStorage.getItem("token")) || "";
  return axios
    .patch(`https://lawyerb.onrender.com/api/${id}`, payload, {
      headers: {
        Authorization: `${authToken}`,
      },
    })
    .then((r) => {
      dispatch({ type: types.UPDATE_LAWYER_SUCCESS, payload: r });
      return r;
    })
    .catch((e) => {
      dispatch({ type: types.UPDATE_LAWYER_FAILURE, payload: e });
    });
};

export const getSearch = (query) => (dispatch) => {
  dispatch({ type: types.GET_ALL_LAWYER_REQUEST });
  const authToken = JSON.parse(localStorage.getItem("token")) || "";
  return axios
    .get(`https://lawyerb.onrender.com/api/lawyerSearch?searchParam=${query}`, {
      headers: {
        Authorization: `${authToken}`,
      },
    })
    .then((response) => {
      dispatch({ type: types.GET_ALL_LAWYER_SUCCESS, payload: response });
      return response;
    })
    .catch((error) => {
      dispatch({ type: types.GET_ALL_LAWYER_FAILURE, payload: error });
      return error;
    });
};

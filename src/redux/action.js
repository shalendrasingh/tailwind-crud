import axios from "axios";
import * as types from "./actionTypes";

export const getFormStep = (payload) => (dispatch) => {
  return dispatch({ type: types.UPDATE_FORM_STATE, payload });
};
export const editFormData = (payload) => (dispatch) => {
  return dispatch({ type: types.EDIT_JOB_DATA, payload });
};

export const addJob = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_JOB_REQUEST });
  return axios
    .post(`https://tailwindbackend.onrender.com/api/addJob`, payload)
    .then((r) => {
      dispatch({ type: types.ADD_JOB_SUCCESS, payload: r });
      return r;
    })
    .catch((e) => {
      dispatch({ type: types.ADD_JOB_FAILURE, payload: e });
    });
};

export const getAllJob = (payload) => (dispatch) => {
  dispatch({ type: types.GET_ALL_JOB_REQUEST });
  return axios
    .get(`https://tailwindbackend.onrender.com/api/allJob`, {})
    .then((r) => {
      dispatch({ type: types.GET_ALL_JOB_SUCCESS, payload: r });
      return r;
    })
    .catch((e) => {
      dispatch({ type: types.GET_ALL_JOB_FAILURE, payload: e });
      return e;
    });
};
export const updateJob = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_JOB_REQUEST });
  return axios
    .patch(`https://tailwindbackend.onrender.com/api/${id}`, payload, {})
    .then((r) => {
      dispatch({ type: types.UPDATE_JOB_SUCCESS, payload: r });
      return r;
    })
    .catch((e) => {
      dispatch({ type: types.UPDATE_JOB_FAILURE, payload: e });
    });
};

export const deleteJob = (jobId) => (dispatch) => {
  dispatch({ type: types.JOB_DELETE_REQUEST });
  return axios
    .delete(`https://tailwindbackend.onrender.com/api/${jobId}`, {})
    .then((r) => {
      dispatch({ type: types.JOB_DELETE_SUCCESS, payload: r });
      return r;
    })
    .catch((e) => {
      dispatch({ type: types.JOB_DELETE_FAILURE, payload: e });
    });
};

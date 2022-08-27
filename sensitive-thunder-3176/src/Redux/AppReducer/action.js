import * as types from "./actionTypes";
import axios from "axios";

const getMusicRecordsRequest = () => {
  return {
    type: types.GET_TAGS_REQUEST,
  };
};
const getMusicRecordsSuccess = (r) => {
  return {
    type: types.GET_TAGS_SUCCESS,
    payload: r.data,
  };
};
const getTagsFailure = (e) => {
  return {
    type: types.GET_TAGS_FAILURE,
    payload: e,
  };
};
const getTags = (params) => (dispatch) => {
  dispatch(getMusicRecordsRequest());
  return axios
    .get("http://localhost:8080/tags", params)
    .then((r) => {
     
      return dispatch(getMusicRecordsSuccess(r));
    })
    .catch((e) => {
      return dispatch(getTagsFailure(e));
    });
};
const postMusicRecordsRequest = () => {
  return {
    type: types.POST_TAGS_REQUEST,
  };
};
const postMusicRecordsSuccess = (r) => {
  return {
    type: types.POST_TAGS_SUCCESS,
    payload: r.data,
  };
};
const postTagsFailure = (e) => {
  return {
    type: types.POST_TAGS_FAILURE,
    payload: e,
  };
};
const postTags = (params, ) => (dispatch) => {
  dispatch(postMusicRecordsRequest());
  return axios
    .post(
      `http://localhost:8080/tags`,params)
    .then((r) => {
      return dispatch(postMusicRecordsSuccess(r));
    })
    .catch((e) => {
      return dispatch(postTagsFailure(e));
    });
};

const getTasks = (params) => (dispatch) => {
  dispatch({ type: types.GET_TASK_REQUEST });
  return axios
    .get("http://localhost:8080/tasks", params)
    .then((r) => dispatch({ type: types.GET_TASK_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_TASK_FAILURE, payload: e.data }));
};

const addTask = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TASK_REQUEST });
  axios
    .post("http://localhost:8080/tasks", payload)
    .then((r) => {
      return dispatch({ type: types.ADD_TASK_REQUEST, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.ADD_TASK_FAILURE, payload: e.data }));
};

export { getTags, postTags, getTasks, addTask };

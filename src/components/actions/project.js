/* eslint-disable max-len */
import { PROJECT_LOADING, PROJECT_LOADED, PROJECT_FAILED } from '../types/projectTypes';
// eslint-disable-next-line max-len
import api from '../api/project';

export const projectLoading = () => ({
  type: PROJECT_LOADING
});
export const projectLoaded = (data) => ({
  type: PROJECT_LOADED,
  payload: {
    data
  }
});
export const projectFailed = (error) => ({
  type: PROJECT_FAILED,
  payload: {
    error
  }
});

export const project = () => (dispatch) => {
  dispatch(projectLoading());
  api.projects.all().then((data) => {
    dispatch(projectLoaded(data));
  }).catch((error) => {
    dispatch(projectFailed(error.message));
  });
};

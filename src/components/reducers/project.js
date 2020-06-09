import { PROJECT_LOADING, PROJECT_LOADED, PROJECT_FAILED } from '../types/projectTypes';

const initialState = {
  loading: null,
  project: [],
  error: null
};
export default function project(state = initialState, action) {
  switch (action.type) {
    case PROJECT_LOADING:
      return {
        ...state,
        loading: true
      };
    case PROJECT_LOADED:
      return {
        ...state,
        loading: false,
        project: [...state.project, action.payload.data]
      };
    case PROJECT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default: return state;
  }
}

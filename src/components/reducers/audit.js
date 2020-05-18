import { AUDIT_LOADING, AUDIT_LOADED, AUDIT_FAILED } from '../types/audit';

const initialState = {
  loading: false,
  audits: [],
  error: null
};
export default function audit(state = initialState, action) {
  switch (action.type) {
    case AUDIT_LOADING:
      return {
        ...state,
        loading: true
      };
    case AUDIT_LOADED:
      return {
        ...state,
        loading: false,
        audits: [...state.audits, action.payload.data]
      };
    case AUDIT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default: return state;
  }
}

import { AUDIT_LOADING, AUDIT_LOADED, AUDIT_FAILED } from '../types/audit';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case AUDIT_LOADING:
      return 'loading';
    case AUDIT_LOADED:
      return action.data;
    case AUDIT_FAILED:
      return state;
    default: return state;
  }
}

/* eslint-disable max-len */
import api from '../dummyData/data.json';
import { AUDIT_LOADING, AUDIT_LOADED, AUDIT_FAILED } from '../types/audit';
// eslint-disable-next-line max-len

export const auditLoading = () => ({
  type: AUDIT_LOADING
});
export const auditLoaded = (data) => ({
  type: AUDIT_LOADED,
  data
});
export const auditFailed = () => ({
  type: AUDIT_FAILED
});
export const audit = () => (dispatch) => api.audit.all().then((data) => dispatch(auditLoaded(data)));

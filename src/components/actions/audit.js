/* eslint-disable max-len */
import { AUDIT_LOADING, AUDIT_LOADED, AUDIT_FAILED } from '../types/audit';
// eslint-disable-next-line max-len
import api from '../api/audit';

export const auditLoading = () => ({
  type: AUDIT_LOADING
});
export const auditLoaded = (data) => ({
  type: AUDIT_LOADED,
  payload: {
    data
  }
});
export const auditFailed = (error) => ({
  type: AUDIT_FAILED,
  payload: {
    error
  }
});

export const filterAudit = () => (dispatch) => {
  dispatch(console.log('Hello'));
};

export const audit = () => (dispatch) => {
  dispatch(auditLoading());
  api.audit.all().then((data) => {
    dispatch(auditLoaded(data));
  }).catch((error) => {
    dispatch(auditFailed(error.message));
  });
};

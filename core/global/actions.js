import {LOADING, ERROR} from './types';

export const setLoading = (loading, dispatch) => {
  dispatch({
    type: LOADING,
    payload: loading,
  });
};
export const setError = (error, dispatch) => {
  setLoading(false, dispatch);
  dispatch({
    type: ERROR,
    payload: error,
  });
};

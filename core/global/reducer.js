import createReducer from '../createReducer';
import {LOADING, ERROR} from './types';

export const INITIAL_STATE_GLOBAL = {
  loading: false,
  error: false,
};

const setLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload,
  };
};

const setError = (state, action) => {
  return {
    ...state,
    error: action.payload,
  };
};

export default createReducer(INITIAL_STATE_GLOBAL, {
  [LOADING]: setLoading,
  [ERROR]: setError,
});

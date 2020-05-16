import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import { userLoggedIN } from '../actions/auth';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.smeJwt) {
  const user = { token: localStorage.smeJwt };
  store.dispatch(userLoggedIN(user));
}

export default store;

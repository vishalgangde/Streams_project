import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose} from 'redux';
import { Provider } from 'react-redux';
import reduxThnuk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThnuk)));

ReactDOM.render(
            <Provider store={store}>
            <App />
            </Provider>,
            document.querySelector('#root')
            );
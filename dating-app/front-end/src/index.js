import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer, composeWithDevTools());
   
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
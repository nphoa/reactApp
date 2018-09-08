import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import appReducer from './Reducers/index';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import appSaga from '../src/Sagas/index.Saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(appSaga);
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

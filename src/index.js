import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App';
import '../styles/index.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.reducer';
import sagas from './sagas/index.saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
 );
 sagaMiddleware.run(sagas);

ReactDOM.render(<Provider store={store}> <App/>
</Provider>, document.getElementById("container"));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import Provider from "react-redux/es/components/Provider";
// 1) 동일한 자바스크립트 파일을 찾는다
// 2) 해당 폴더의 index 파일을 찾습니다.
import {allReducers} from "./redux/reducers";
import {store} from "./redux/store";

const action = {
    type: 'updateUser',
    payload: {
        user: 'Tom'
    }
}

store.subscribe(() => console.log('subscript:' + store.getState()));

store.dispatch(action);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

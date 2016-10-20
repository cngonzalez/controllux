import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore } from 'redux';
import Controllux from './reducers/index'
import { Provider } from 'react-redux'

let store = createStore(Controllux)

function objAnnounce(){
  console.log(store.getState())
  setTimeout(objAnnounce, 5000)
}

setTimeout(objAnnounce, 5000)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

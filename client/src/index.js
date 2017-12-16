import React from 'react';

import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux";
import {getPhotos} from "./redux/flickr";



ReactDOM.render(
        <Provider store={store}>
          <Router>
              <App/>
          </Router>
        </Provider>,
      document.getElementById('root')
);
// getQualityList()
store.dispatch(getPhotos());
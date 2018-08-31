import Amplify from 'aws-amplify'
import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import store from '~/modules'

Amplify.configure({
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_HkSQM46sb',
    userPoolWebClientId: 'n669hsie4ehgverdqrloaldac'
  }
})

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

import Amplify from 'aws-amplify'
import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import store from '~/modules'

// https://aws-amplify.github.io/amplify-js/media/authentication_guide
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker();

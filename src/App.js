import React from 'react';
import {Provider} from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <p>Hello World</p>
    </Provider>
   
  );
}

export default App;

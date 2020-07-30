import React from 'react';
import Main from './components/MainComponent';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configurateStore } from "./redux/configurateStore";


const store = configurateStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter> 
    </Provider>
  );
}

export default App;

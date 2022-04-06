import React from 'react';

import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar/Sidebar';
import Video from './components/Video/Video';

import store from './store/index';

import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;

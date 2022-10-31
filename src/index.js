import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { HashRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      {/* I know HashRouter is not recommended to use and usualy I use BrowserRouter, but in this case HashRouter was the only way to solve Netlify page refresh bug that worked*/}
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>  
  </React.StrictMode>
);

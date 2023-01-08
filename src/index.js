import React from 'react';
import ReactDOM from 'react-dom/client'; //import ReactDOM from 'react-dom' (deprecated way);

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //version 18
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
//ReactDOM.render(<App />, document.getElementById('root')); deprecated


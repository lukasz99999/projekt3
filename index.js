import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "t0", name: "Owoce", },
  { id: "t1", name: "Ziemniaki", },
  { id: "t2", name: "Chleb", },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
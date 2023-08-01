import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './feature/store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Thunk } from './Thunk';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/thunk'>Thunk </Link>
      <Routes>
        <Route path='/thunk' element={<Thunk />} />
        <Route path='/' element={<App />} />
      </Routes>
    </Router>
  </Provider>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { UserDetail } from './pages/UserDetail';
import { Home } from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/people/:id" element={<UserDetail/>}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  </Provider>
  
);





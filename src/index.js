import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar'
import Registration from './components/Registration';
import Login from './components/Login'
import store from './store/store';
import { Provider } from 'react-redux';
import Product from './Product';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <App /> */}

    <Provider store={store}>

{/* <Product/> */}



   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/Registration' element={<Registration/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Product' element={<Product/>}></Route> 

    </Routes>

    
    
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

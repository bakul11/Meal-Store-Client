import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Contact from './Componets/Contact/Contact';
import FoodDetails from './Componets/HomePages/FoodDetails/FoodDetails';
import HomePages from './Componets/HomePages/HomePages';
import Login from './Componets/Login/Login';
import Register from './Componets/Register/Register';
import Footer from './Componets/ShareFile/Footer/Footer';
import Navbar from './Componets/ShareFile/Navbar/Navbar';
import RequireAuth from './Componets/RequireAuth/RequireAuth';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <HomePages></HomePages> }></Route>
        <Route path='/register' element={ <Register></Register> }></Route>
        <Route path='/contact' element={ <Contact></Contact> }></Route>
        <Route path='/details/:id' element={
          <RequireAuth>
            <FoodDetails></FoodDetails>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={ <Login></Login> }></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
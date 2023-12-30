
import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageLayout from './Component/PageLayout';
import React from 'react';
import SignIn from './Component/User Sign/SignIn';
import SignUp from './Component/User Sign/SignUp';
import Update from './UpdateProfile/update';
import CRUD from './Component/MainFrame/CRUD';

function App() {
  const id = localStorage.getItem('User_ID')
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route path='/' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/ProfileUpdate' element={<Update />} />
      <Route path='/manageTask' element={<CRUD />} />:
      <Route path='/updateProfile' element={<Update />} />:
    </Route >
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App

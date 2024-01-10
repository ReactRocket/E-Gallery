import React, { useEffect } from 'react';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Default } from './pages/dashboard/Default';
import { Photos } from './pages/dashboard/Photos';
import { Videos } from './pages/dashboard/Videos';
import { Album } from './pages/dashboard/Album';
import { Error } from './pages/Error';
import StoreImageTextFirebase from './pages/dashboard/StoreImageTextFirebase';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />


          {
            sessionStorage.getItem('love_auth') && <Route exact path='/dashboard' element={<Dashboard />} >
              <Route exact index element={<Default />} />
              <Route exact path='photos' element={<Photos />} />
              <Route exact path='videos' element={<Videos />} />
              <Route exact path='albums' element={<Album />} />
              <Route exact path='upload' element={<StoreImageTextFirebase />} />
            </Route>
          }



          <Route exact path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

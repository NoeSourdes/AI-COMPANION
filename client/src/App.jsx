import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Chat from './pages/Chat';
import Error from './pages/Error';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import Support from './pages/Support';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/creator' element={<Profiles/>}/>
        <Route path='/AI-Powered' element={<Support/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
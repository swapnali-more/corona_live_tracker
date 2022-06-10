import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Statewise from './components/statewise/Statewise';
import Covid from './components/Covid';
import {
  statewise, statelist
} from './route/route'
import Statelist from './components/statewise/Statelist';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Covid />} />
          <Route path={statewise} element={<Statewise />} />
          <Route path={statelist} element={<Statelist />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Add from './pages/Add'
import Teams from './pages/Teams'
import axios from 'axios'
import Update from './pages/Update'

function App() {



  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

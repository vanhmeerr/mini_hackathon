import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import List from './List/List'
import Bookingpage from './Build/Bookingpage'

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/Bookingpage" element={<Bookingpage />} />
        </Routes>
      </Router>
    </div >
  )
}

export default App
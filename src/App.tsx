import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Writing from "./pages/Writing"
import Root from "./pages/root"
import Contact from "./pages/Contact"
import Films from './pages/Films'
import Sound from './pages/Sound'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/sound" element={<Sound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/films" element={<Films />} />
      </Route>
    </Routes>
  )
}

export default App
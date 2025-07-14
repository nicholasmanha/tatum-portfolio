import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/Sound"
import Root from "./pages/root"
import Contact from "./pages/Contact"
import Films from './pages/Films'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/films" element={<Films />} />
      </Route>
    </Routes>
  )
}

export default App
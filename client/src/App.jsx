import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";


function App() {
  return (
  <Routes>
    <Route path="/" element= {<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
  )
}

export default App

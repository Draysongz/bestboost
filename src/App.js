import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Why from "./components/Why";
import How from "./components/How";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import AddFunds from "./components/AddFunds";


function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Why />
      <How />
      <Faq />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/addFunds' element={<AddFunds/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

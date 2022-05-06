import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses"
import { Routes, Route } from "react-router-dom";
function App() {
   return (
      <>
         <Header/>
         <Routes>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Courses" element={<Courses />}></Route>
         </Routes>
         

      </>
   );
}

export default App;

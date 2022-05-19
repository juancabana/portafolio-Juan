import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";


export default function AppRouter() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
            
        );
}
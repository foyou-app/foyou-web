import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";  
import "./assets/css/wrap.css";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  HashRouter,Navigate
} from "react-router-dom"; 
import PublicRoute from "./lib/PublicRoute";
import Home from "./pages/index"; 
import session from "./lib/authstore"; 
import UseAuth from "./lib/hooks/useAuth"; 
import './i18n';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {isLoggedIn} = UseAuth();

  return (
    <React.Suspense fallback={loading}>
   
   <Router>
     <Routes>
  
       <Route path="/" element={<Home />} /> 
     
     </Routes>
     </Router> 
 </React.Suspense>
  );
}

export default App;

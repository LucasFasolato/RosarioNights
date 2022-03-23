import React from "react";
import './App.css';
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp/SignUp"
import SignIn from "./SignIn/SignIn"
import FrontPage from "./FrontPage/FrontPage"

function AppWrapper() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<FrontPage />} />
      </Routes>
    </div>
  );
}

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;

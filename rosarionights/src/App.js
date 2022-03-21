import React from "react";
import './App.css';
import { Navigate, Route, Outlet, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp/SignUp.js"

function AppWrapper() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
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

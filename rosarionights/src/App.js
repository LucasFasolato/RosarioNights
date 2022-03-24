import React from "react";
import './App.css';
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp/SignUp"
import SignIn from "./SignIn/SignIn"
import FrontPage from "./FrontPage/FrontPage"
import Boliches from "./Boliches/Boliches"
import Bares from "./Bares/Bares"
import Propuestas from "./Propuestas/Propuestas"
import Comunidad from "./Comunidad/Comunidad"

function AppWrapper() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<FrontPage />} />
        <Route path="/home/boliches" element={<Boliches />} />
        <Route path="/home/bares" element={<Bares />} />
        <Route path="/home/propuestas" element={<Propuestas />} />
        <Route path="/home/comunidad" element={<Comunidad />} />
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

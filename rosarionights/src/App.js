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
import BluePark from "./Boliches/PageBoliche/BluePark"
import Volt from "./Boliches/PageBoliche/Volt"
import Bresh from "./Boliches/PageBoliche/Bresh"
import Bohemia from "./Boliches/PageBoliche/Bohemia"
import Mora from "./Boliches/PageBoliche/Mora"
import Lamarina from "./Boliches/PageBoliche/Lamarina"
import Bound from "./Boliches/PageBoliche/Bound"
import Wallas from "./Boliches/PageBoliche/Wallas"
import Horarios from "./Boliches/ComponentesPB/Horarios"
import Entradas from "./Boliches/ComponentesPB/Entradas"
import Ubicacion from "./Boliches/ComponentesPB/Ubicacion"
import Precios from "./Boliches/ComponentesPB/Precios"
import Requisitos from "./Boliches/ComponentesPB/Requisitos"

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
        <Route path="/home/boliches/bluepark" element={<BluePark/>} />
        <Route path="/home/boliches/volt" element={<Volt/>} />
        <Route path="/home/boliches/bresh" element={<Bresh/>} />
        <Route path="/home/boliches/bohemia" element={<Bohemia/>} />
        <Route path="/home/boliches/mora" element={<Mora/>} />
        <Route path="/home/boliches/lamarina" element={<Lamarina/>} />
        <Route path="/home/boliches/bound" element={<Bound/>} />
        <Route path="/home/boliches/wallas" element={<Wallas/>} />

        <Route path="/home/boliches/horarios" element={<Horarios/>} />
        <Route path="/home/boliches/entradas" element={<Entradas/>} />
        <Route path="/home/boliches/ubicacion" element={<Ubicacion/>} />
        <Route path="/home/boliches/precios" element={<Precios/>} />
        <Route path="/home/boliches/requisitos" element={<Requisitos/>} />
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

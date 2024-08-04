import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import "./index.css";
import { Home } from "./components/Home";
import { Cardio, RutinasCardio } from "./components/RutinasCardio";
import { Musculacion, RutinasMusculacion } from "./components/RutinasMusculacion";
import { RutinasCuerpoEntero } from "./components/RutinasCuerpoEntero";
import { ComoEntrenar } from "./components/ComoEntrenar"

import { FullBody } from "./components/RutinasCuerpoEntero";
import { CalculadoraCalorias } from "./components/CalculadoraCalorias";

export const App = () => {
  return (
    <>
        <Header />
        {/* <Home></Home> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/como-entrenar" element={<ComoEntrenar/>}/>
          <Route path="/calculadora-de-calorias" element={<CalculadoraCalorias/>}/>
          <Route path="/rutinas-musculacion" element={<RutinasMusculacion/>}/>
          <Route path="/rutinas-cuerpo-entero" element={<RutinasCuerpoEntero/>}/>
          <Route path="/rutinas-cardio" element={<RutinasCardio/>}/>
          <Route path="/rutinas-cuerpo-entero/fullbody/:id" element={<FullBody />} />  
          <Route path="/rutinas-musculacion/musculacion/:id" element={<Musculacion/>} />
          <Route path="/rutinas-cardio/cardio/:id" element={<Cardio/>} />
        </Routes>
   </> 
  );
};

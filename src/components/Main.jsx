import React from 'react';
import {Routes,Route} from "react-router-dom";
import styles from "./Main.module.css";
import Menu from './MenuBar/Menu';
import Home from "./Home/Home.jsx"
import Crew from "./Crew/Crew.jsx";
import Destination from "./Destination/Destination.jsx";
import Technology from "./Technology/Technology.jsx";

const Main = () => {
  return (
    <div className={styles.main}>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Destination" element={<Destination/>}></Route>
        <Route path="/Crew" element={<Crew/>}></Route>
        <Route path="/Technology" element={<Technology/>}></Route>
      </Routes>
    </div>
  )
}

export default Main
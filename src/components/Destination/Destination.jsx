import React, { useState } from 'react';
import styles from "./Destination.module.css";
import moonPNG from "../../assets/destination/image-moon.png";
import moonWEBP from "../../assets/destination/image-moon.webp";

const Destination = () => {
  const [classMoon,setClassMoon] = useState(styles.linkActive);
  const [classMars,setClassMars] = useState('');
  const [classEuropa,setClassEuropa] = useState('');
  const [classTitan,setClassTitan] = useState('');
  const [destination,setDestination] = useState("MOON")

  const setClassNames=(destinationName)=>
  {
    if(destinationName==="moon")
    {
      //Setting active class
      setClassMoon(styles.linkActive);
      setClassEuropa('');
      setClassMars('');
      setClassTitan('');
      //Setting page content
      setDestination("MOON");
    }else if(destinationName==="mars")
    {
      //Setting active class
      setClassMoon('');
      setClassEuropa('');
      setClassMars(styles.linkActive);
      setClassTitan('');
      //Setting page content
      setDestination("MARS");
    }else if(destinationName==="europa")
    {
      //Setting active class
      setClassMoon('');
      setClassEuropa(styles.linkActive);
      setClassMars('');
      setClassTitan('');
      //Setting page content
      setDestination("EUROPA");
    }else if(destinationName==="titan")
    {
      //Setting active class
      setClassMoon('');
      setClassEuropa('');
      setClassMars('');
      setClassTitan(styles.linkActive);
      //Setting page content
      setDestination("TITAN");
    }
  }
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h5 className={styles.pickDestination}>
          PICK YOUR DESTINATION
        </h5>
        <img src={moonWEBP} alt="moon" srcset={`${moonPNG} 3x`} />
        <nav id={styles.destNav}>
          <ul>
            <li className={classMoon} onClick={()=>{setClassNames("moon")}}>MOON</li>
            <li className={classMars} onClick={()=>{setClassNames("mars")}}>MARS</li>
            <li className={classEuropa} onClick={()=>{setClassNames("europa")}}>EUROPA</li>
            <li className={classTitan} onClick={()=>{setClassNames("titan")}}>TITAN</li>
          </ul>
        </nav>
        <h3>{destination}</h3>
        <p>
          See our planet as you’ve never seen it before. A perfect
          relaxing trip away to help regain perspective and come back
          refreshed. While you’re there, take in some history by
          visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <span className={styles.divider}>&nbsp;</span>
        <div className={styles.travelEst}>
          <p>AVG. DISTANCE</p>
          <h5>384,400 km</h5>
        </div>
        <div className={styles.travelEst}>
          <p>EST. TRAVEL TIME</p>
          <h5>3 DAYS</h5>
        </div>

      </div>
    </div>
  )
}

export default Destination;
import React, { useState } from 'react';
import styles from "./Destination.module.css";
import moonPNG from "../../assets/destination/image-moon.png";
import moonWEBP from "../../assets/destination/image-moon.webp";
import marsPNG from "../../assets/destination/image-mars.png";
import marsWEBP from "../../assets/destination/image-mars.webp";
import europaPNG from "../../assets/destination/image-europa.png";
import europaWEBP from "../../assets/destination/image-europa.webp";
import titanPNG from "../../assets/destination/image-titan.png";
import titanWEBP from "../../assets/destination/image-titan.webp";

const Destination = () => {
  const moon = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  const moonDist = "384,400 km";
  const moonTime ="3 days";
  const moonPic = [moonPNG,moonWEBP];

  const mars ="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  const marsDist="225 MIL. km";
  const marsTime="9 months";
  const marsPic =[marsPNG,marsWEBP];
  

  const europa ="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  const europaDist="628 MIL. km";
  const europaTime="3 years";
  const europaPic =[europaPNG,europaWEBP];

  const titan ="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  const titanDist="1.6 BIL. km";
  const titanTime="7 years";
  const titanPic =[titanPNG,titanWEBP];

  const [description,setDescription] = useState(moon);
  const [destination,setDestination] = useState("MOON")
  const [dist,setDist] =useState(moonDist);
  const [trTime,setTrtime]=useState(moonTime);
  const [pic,setPic] = useState(moonPic);

  const [classMoon,setClassMoon] = useState(styles.linkActive);
  const [classMars,setClassMars] = useState('');
  const [classEuropa,setClassEuropa] = useState('');
  const [classTitan,setClassTitan] = useState('');

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
      setDescription(moon);
      setTrtime(moonTime);
      setDist(moonDist);
      setPic(moonPic);
    }else if(destinationName==="mars")
    {
      //Setting active class
      setClassMoon('');
      setClassEuropa('');
      setClassMars(styles.linkActive);
      setClassTitan('');
      //Setting page content
      setDestination("MARS");
      setDescription(mars);
      setTrtime(marsTime);
      setDist(marsDist);
      setPic(marsPic);
    }else if(destinationName==="europa")
    {
      //Setting active class
      setClassMoon('');
      setClassEuropa(styles.linkActive);
      setClassMars('');
      setClassTitan('');
      //Setting page content
      setDestination("EUROPA");
      setDescription(europa);
      setTrtime(europaTime);
      setDist(europaDist);
      setPic(europaPic);
    }else if(destinationName==="titan")
    {
      //Setting active class
      setClassMoon('');
      setClassEuropa('');
      setClassMars('');
      setClassTitan(styles.linkActive);
      //Setting page content
      setDestination("TITAN");
      setDescription(titan);
      setTrtime(titanTime);
      setDist(titanDist)
      setPic(titanPic);
    }
  }
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.pickDest}>
          <h5 className={styles.pickDestination}>
            PICK YOUR DESTINATION
          </h5>
        </div>
        <div className={styles.planet}>
          <img src={pic[1]} alt="moon" srcSet={`${pic[0]} 3x`} />
          <div className={styles.destCont}>
            <nav id={styles.destNav}>
              <ul>
                <li className={classMoon} onClick={()=>{setClassNames("moon")}}>MOON</li>
                <li className={classMars} onClick={()=>{setClassNames("mars")}}>MARS</li>
                <li className={classEuropa} onClick={()=>{setClassNames("europa")}}>EUROPA</li>
                <li className={classTitan} onClick={()=>{setClassNames("titan")}}>TITAN</li>
              </ul>
            </nav>
            <h3>{destination}</h3>
            <p className={styles.desc}>
              {description}
            </p>
            <span className={styles.divider}>&nbsp;</span>
            <div className={styles.travEst}>
              <div className={styles.travelEst}>
                <p>AVG. DISTANCE</p>
                <h5>{dist}</h5>
              </div>
              <div className={styles.travelEst}>
                <p>EST. TRAVEL TIME</p>
                <h5>{trTime}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination;
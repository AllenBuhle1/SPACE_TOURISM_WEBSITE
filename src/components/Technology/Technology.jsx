import React, { useEffect, useRef, useState } from 'react';
import styles from "./Technology.module.css";
import tech from "./Technologies";

const Technology = () => {

  const imgIndex = useRef(0);
  if(window.innerWidth>=960)
  {
    imgIndex.current = 1;
  }else
  {
    imgIndex.current = 0;
  }
  const numOfTechs = tech.length-1;
  const [indexTech,setIndexTech] = useState(0);
  const [pic,setPic] = useState(tech[0].pic);
  const [name,setName] = useState(tech[0].name);
  const [desc,setDesc] = useState(tech[0].description);

  const [classVehicle,setClassVehicle] =useState(styles.radioActive);
  const [classPort,setClassPort]= useState('');
  const [classCapsule,setClassCapsule]=useState('');

  //Handle Change of Image from landscape to portrait
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    if(windowSize.innerWidth >=960)
    {
      imgIndex.current = 1;
      console.log("Imagechange");
    }else
    {
      imgIndex.current = 0;
    }
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  })

  const emptyAllRadioClassName = ()=>{
    setClassVehicle('');
    setClassPort('');
    setClassCapsule('');
  }

  const activeRadioBTN=(techN)=>
  {
    emptyAllRadioClassName();
    if(techN==="LAUNCH VEHICLE")
    {
      setClassVehicle(styles.radioActive);
    }else if(techN==="SPACEPORT")
    {
      setClassPort(styles.radioActive);
    }else if(techN==="SPACE CAPSULE")
    {
      setClassCapsule(styles.radioActive);
    }
  }

  const radioClickHandler = (index)=>{
    setIndexTech(indexTech=>index);
    let techN = tech[index];

    //Setting active radio button
    activeRadioBTN(techN.name);

    //Page Information
    setPic(techN.pic);
    setName(techN.name);
    setDesc(techN.description);

    console.log(techN.name+" "+indexTech);
  }

  function incrIndex()
  {
    let tempIndex = indexTech;
    tempIndex+=1;
    if(tempIndex>numOfTechs)
    {
      tempIndex =0;
    }
    setIndexTech(tempIndex);
    return tempIndex;
  }

  function decrIndex()
  {
    let tempIndex = indexTech;
    tempIndex-=1;
    if(tempIndex<0)
    {
      tempIndex = numOfTechs;
    }
    setIndexTech(tempIndex);
    return tempIndex;
  }

  /*****************************************************************
   
                         Handling Swipe Events For Mobile
   
   *****************************************************************/
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    
    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;
    
    const onTouchStart = (e) => {
      // Excluding touch events
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    }
    
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const swipeLeft = distance > minSwipeDistance
      const swipeRight = distance < -minSwipeDistance
      
      //Handling swipe event 
      let currentIndex=0;
      if(swipeLeft)
      {
        currentIndex = incrIndex(indexTech);
        radioClickHandler(currentIndex);
      }else if(swipeRight)
      {
        currentIndex = decrIndex(indexTech);
        radioClickHandler(currentIndex);
      }

    }
  /*****************************************************************
    
                            Till Here

  *****************************************************************/




  return (
    <div className={styles.page}>
      <div className={styles.content} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onTouchMove={onTouchMove}>
        <div className={styles.titleRapper}>
          <h5 className={styles.spaceLaunch}>
            SPACE LAUNCH 101
          </h5>
        </div>
        <div className={styles.vihicleDetails}>
          <div className={styles.techPic}>
            <img src={pic[imgIndex.current]} alt={`${name}`} />
          </div>
          <div className={styles.vehInf}>
            <nav>
                <span className={classVehicle} onClick={()=>{radioClickHandler(0);}}>1</span>
                <span className={classPort} onClick={()=>{radioClickHandler(1);}}>2</span>
                <span className={classCapsule} onClick={()=>{radioClickHandler(2);}}>3</span>
            </nav>
            <div className={styles.spaceVehicleInfo}>
              <div className={styles.temName}>
                  <p id={styles.terminology}>THE TERMINOLOGY…</p>
                  <h4 id={styles.name}>{name}</h4>
              </div>
              <p className={styles.description}>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
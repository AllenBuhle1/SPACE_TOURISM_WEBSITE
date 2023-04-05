import React, { useState } from 'react';
import styles from "./Crew.module.css";
import crew from "./CrewMembers";

const Crew = () => {
  const numOfCrew = crew.length-1;
  const [indexCrew,setIndexCrew] = useState(0);

  const [pic,setPic] =useState(crew[indexCrew].pic);
  const [desc,setDesc] = useState(crew[indexCrew].description);
  const [name,setName] = useState(crew[indexCrew].name);
  const [pos,setPos] = useState(crew[indexCrew].position);


  const [classDouglas,setClassDouglas] =useState(styles.radioActive);
  const [classMark,setClassMark]= useState('');
  const [classVictor,setClassVictor]=useState('');
  const [classAnsari,setClassAnsari] = useState('');
  
  const emptyAllRadioClassName = ()=>{
      setClassDouglas('');
      setClassVictor('');
      setClassMark('');
      setClassAnsari('');
  }

  const activeRadioBTN=(crewMember)=>
  {
    emptyAllRadioClassName();
    if(crewMember==="Douglas Hurley")
    {
      setClassDouglas(styles.radioActive);
    }else if(crewMember==="Victor Glover")
    {
      setClassVictor(styles.radioActive);
    }else if(crewMember==="MARK SHUTTLEWORTH")
    {
      setClassMark(styles.radioActive);
    }else if(crewMember==="Anousheh Ansari")
    {
      setClassAnsari(styles.radioActive);
    }
  }

  const radioClickHandler = (index)=>{
    setIndexCrew(indexCrew=>index);
    let crewM = crew[index];

    //Setting active radio button
    activeRadioBTN(crewM.name);

    //Page Information
    setPos(crewM.position);
    setName(crewM.name);
    setDesc(crewM.description);
    setPic(crewM.pic);

    console.log(crewM.name+" "+indexCrew);
  }

  
  function incrIndex()
  {
    let tempIndex = indexCrew;
    tempIndex+=1;
    if(tempIndex>numOfCrew)
    {
      tempIndex =0;
    }
    setIndexCrew(tempIndex);
    return tempIndex;
  }

  function decrIndex()
  {
    let tempIndex = indexCrew;
    tempIndex-=1;
    if(tempIndex<0)
    {
      tempIndex = numOfCrew;
    }
    setIndexCrew(tempIndex);
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
        currentIndex = incrIndex(indexCrew);
        radioClickHandler(currentIndex);
      }else if(swipeRight)
      {
        currentIndex = decrIndex(indexCrew);
        radioClickHandler(currentIndex);
      }

    }
  /*****************************************************************
    
                            Till Here
   
   *****************************************************************/
  return (
    <div className={styles.page}>
      <div className={styles.content} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className={styles.meetCrewCont}>
          <h5 className={styles.meetCrew}>
            MEET YOUR CREW
          </h5>
        </div>
        <div className={styles.crewPgCont}>
          <div className={styles.crewMemberPic}>
            <img src={pic[1]} alt={`${name}`} srcSet={`${pic[0]} 3x`} />
            <span className={styles.crewMemberPicUnderline}>&nbsp;</span>
          </div>
          <div className={styles.crewCont}>
            <nav>
                <span className={classDouglas} onClick={()=>{radioClickHandler(0);}}>&nbsp;</span>
                <span className={classVictor} onClick={()=>{radioClickHandler(1);}}>&nbsp;</span>
                <span className={classMark} onClick={()=>{radioClickHandler(2);}}>&nbsp;</span>
                <span className={classAnsari} onClick={()=>{radioClickHandler(3);}}>&nbsp;</span>
              </nav>
              <div className={styles.posName}>
                <div id={styles.posName}>
                  <p id={styles.position}>{pos}</p>
                  <h4 id={styles.name}>{name}</h4>
                </div>
                <p className={styles.des}>{desc}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew;
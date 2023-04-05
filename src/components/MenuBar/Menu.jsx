import React, {  useState } from 'react'
import {Link} from "react-router-dom";
import styles from "./Menu.module.css";
import logo from "../../assets/shared/logo.svg";
import open from "../../assets/shared/open.svg";
import close from "../../assets/shared/close.svg";

const Menu = () => {
    const [menuOpened,setMenuOpened] = useState(true);
    const [menuIcon,setMenuIcon] = useState(open);
    const [sideMenuClass,setSideMenuClass] = useState(styles.menuItems+" "+styles.menuItemsDisabled);
    const [homeActiState,setHomeActiveState] = useState(styles.activeLink);
    const [techActiState,setTechActiState] = useState('');
    const [crewActiState,setCrewActiState] =useState('');
    const [destActiState,setDestActiState] = useState('');

    const clearAllActiveStates = ()=>{
        setHomeActiveState('');
        setTechActiState('');
        setCrewActiState('');
        setDestActiState('');
    }

    const makeLinkActive= (link)=>{
        clearAllActiveStates();
        if(link==="home")
        {
            setHomeActiveState(styles.activeLink);
        }else if(link==="crew")
        {
            setCrewActiState(styles.activeLink);
        }else if(link==="dest")
        {
            setDestActiState(styles.activeLink);
        }else if(link==="tech")
        {
            setTechActiState(styles.activeLink);
        }
    }
    function changeMenuIcon(){
        setMenuOpened(!menuOpened);
        
        if(menuOpened)
        {
            setMenuIcon(close);
            setSideMenuClass(styles.menuItems);
        }else{
            setMenuIcon(open);
            setSideMenuClass(styles.menuItems+" "+styles.menuItemsDisabled)
        }
    }

    function handleLinkClick(linkName)
    {
        changeMenuIcon();
        makeLinkActive(linkName);
    }
  return (
    <nav className={styles.menu}>
        <div>
            <img src={logo} alt="logo" height="50" width="50"/>
        </div>
        {/****************************Menu Mobile*******************/}
        <div className={styles.hamBurger} onClick={changeMenuIcon}>
            <img src={menuIcon} alt="Open Menu" width="40" height="40" id={styles.mobile}/>
        </div>
        <div className={sideMenuClass}>
            <ol className={styles.items}>
                <li className={homeActiState}>
                    <Link className={styles.link} to="/" onClick={()=>{handleLinkClick("home")}}>
                        Home
                    </Link>
                </li>
                <li className={destActiState}>
                    <Link className={styles.link} to="/Destination" onClick={()=>{handleLinkClick("dest")}}>
                        Destination
                    </Link>
                </li>
                <li className={crewActiState}>
                    <Link className={styles.link} to="/Crew" onClick={()=>{handleLinkClick("crew")}}>
                        Crew
                    </Link>
                </li>
                <li className={techActiState}>
                    <Link className={styles.link} to="/Technology" onClick={()=>{handleLinkClick("tech")}}>
                        Technology
                    </Link>
                </li>
            </ol>
        </div>
        
    </nav>
  )
}

export default Menu
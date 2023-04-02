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
  return (
    <nav className={styles.menu}>
        <div>
            <img src={logo} alt="logo" height="50" width="50"/>
        </div>
        {/****************************Menu Mobile*******************/}
        <div className={styles.hamBurger +" "+styles.mobile} onClick={changeMenuIcon}>
            <img src={menuIcon} alt="Open Menu" width="40" height="40"/>
        </div>
        <div className={sideMenuClass}>
            <ol className={styles.items}>
                <li>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={changeMenuIcon}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Destination" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={changeMenuIcon}>
                        Destination
                    </Link>
                </li>
                <li>
                    <Link to="/Crew" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={changeMenuIcon}>
                        Crew
                    </Link>
                </li>
                <li>
                    <Link to="/Technology" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={changeMenuIcon}>
                        Technology
                    </Link>
                </li>
            </ol>
        </div>
        
    </nav>
  )
}

export default Menu
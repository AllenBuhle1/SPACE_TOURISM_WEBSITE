import React, {  useState } from 'react'
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
    <div className={styles.menu}>
        <div>
            <img src={logo} alt="logo" height="50" width="50"/>
        </div>
        {/****************************Menu Mobile*******************/}
        <div className={styles.hamBurger +" "+styles.mobile} onClick={changeMenuIcon}>
            <img src={menuIcon} alt="Open Menu" width="40" height="40"/>
        </div>
        <div className={sideMenuClass}>

        </div>
        
    </div>
  )
}

export default Menu
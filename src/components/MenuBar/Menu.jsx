import React, {  useState } from 'react'
import styles from "./Menu.module.css";
import logo from "../../assets/shared/logo.svg";
import open from "../../assets/shared/open.svg";
import close from "../../assets/shared/close.svg";

const Menu = () => {
    const [menuOpened,setMenuOpened] = useState(false);
    const [menuIcon,setMenuIcon] = useState(open);
    function changeMenuIcon(){
        setMenuOpened(!menuOpened);
        if(menuOpened)
        {
            setMenuIcon(close);
        }else{
            setMenuIcon(open);
        }
    }
  return (
    <div className={styles.menu}>
        <div>
            <img src={logo} alt="logo" height="50" width="50"/>
        </div>
        {/****************************Menu*******************/}
        <div className={styles.hamBurger} onClick={changeMenuIcon}>
            <img src={menuIcon} alt="Open Menu" width="40" height="40"/>
        </div>
    </div>
  )
}

export default Menu
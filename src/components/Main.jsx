import React from 'react'
import styles from "./Main.module.css";
import Menu from './MenuBar/Menu';

const Main = () => {
  return (
    <div className={styles.main}>
      <Menu />
    </div>
  )
}

export default Main
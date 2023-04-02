import React from 'react'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h5>SO, YOU WANT TO TRAVEL</h5>
        <h1>SPACE</h1>
        <p>Let’s face it; if you want to go to space, 
          you might as well genuinely go to outer space 
          and not hover kind of on the edge of it. Well 
          sit back, and relax because we’ll give you a 
          truly out of this world experience!</p>
        <span className={styles.explore}>EXPLORE</span>
      </div>
    </div>
  )
}

export default Home
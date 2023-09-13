import React from 'react'
import styles from  './Nav.module.css';


const Nav = () => {
  return (
    <div>
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
                <img src="../public/brand_logo.png" alt="" />
            </div>
            <div className="menu">
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav;
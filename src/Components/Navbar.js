import React from 'react'
import { FcGlobe } from "react-icons/fc";
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.nav}>
           
            <h1>  <FcGlobe/>My travel journal</h1>

        </div>
    )
}

export default Navbar

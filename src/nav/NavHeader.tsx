import React from "react";
import styles from './NavHeader.module.scss'

export const NavHeader = () => {
    return (
        <div className={styles.nav} >
            <ul className={styles.navItems}>
                <li><a href="/">Main</a></li>
                <li><a href="/">About me</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contacts</a></li>
            </ul>
        </div>
    )

}
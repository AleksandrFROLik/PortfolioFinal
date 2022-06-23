import React, { useEffect, useState } from 'react';
import styles from './NavHeader.module.scss';
import { ModeSwitcher } from '../common/components/modeSwitcher/modeSwitcher';


export type ThemeType = 'Light' | 'Dark'

export const NavHeader = () => {
  const [theme, setTheme] = useState<ThemeType>( 'Light' );

  useEffect( () => {
    document.body.setAttribute( 'data-theme', theme )
  }, [theme] );

  return (
    <div className={styles.nav}>
      <ul className={styles.navItems}>
        <li><a href="#main">Main</a></li>
        <li><a href="#aboutME">About me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="/">Contacts</a></li>
        <ModeSwitcher theme={theme} setTheme={setTheme}/>
      </ul>
    </div>
  )

}
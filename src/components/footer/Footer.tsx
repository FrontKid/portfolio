import React from 'react'
import { useDispatch } from 'react-redux'

import { setActiveNav } from '../../features/header/slice'

import styles from './Footer.module.scss'


const Footer: React.FC = () => {

  const dispatch = useDispatch()

  const hendlerClick = (navItem: string): void => {
    dispatch(setActiveNav(navItem))
  }

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <h1 className={styles.footerTitle}>Poltorak Denys</h1>
        <ul className={styles.footerList}>
          <li>
            <a
              onClick={() => hendlerClick('#about')}
              className={styles.footerLink}
              href="#about">About</a>
          </li>
          <li>
            <a
              onClick={() => hendlerClick('#portfolio')}
              className={styles.footerLink}
              href="#portfolio">Projects</a>
          </li>
          <li>
            <a
              onClick={() => hendlerClick('#skills')}
              className={styles.footerLink}
              href="#skills">Skills</a>
          </li>
        </ul>
        <div className={styles.footerSocials}>
          <a href="https://www.facebook.com/profile.php?id=100051344314528" className={`${styles.footerSocialLink}`} target="__blank">
            <i className="bx bxl-facebook" />
          </a>
          <a href="https://www.instagram.com/p/BzcP1WPo-d-RU5C4rGFexQhpHMKpoH5oveEUhI0/?igshid=YmMyMTA2M2Y%3D" className={`${styles.footerSocialLink}`} target="__blank">
            <i className="bx bxl-instagram" />
          </a>
          <a href="https://twitter.com/FronKidOd" className={`${styles.footerSocialLink}`} target="__blank">
            <i className="bx bxl-twitter" />
          </a>
        </div>
        <a href='https://github.com/FrontKid/portfolio' rel='noreferrer' target="_blank" className={styles.footerGit}>
          Tap here to see this page on github !
        </a>
      </div>
    </footer>

  )
}

export default Footer
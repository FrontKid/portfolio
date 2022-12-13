import React from 'react'
import style from './About.module.scss'

const Info: React.FC = () => {
  return (
    <div className={`${style.aboutInfo} grid`}>
      <div className={style.aboutBox}>
        <i className={`${style.aboutIcon} bx bx-award`} />
        <h3 className={style.aboutTitle}>Experience</h3>
        <span className={style.aboutSubTitle}>6 months working</span>
      </div>
      <div className={style.aboutBox}>
        <i className={`${style.aboutIcon} bx bx-briefcase-alt`} />
        <h3 className={style.aboutTitle}>Completed</h3>
        <span className={style.aboutSubTitle}>50+ Projects</span>
      </div>
      <div className={style.aboutBox}>
        <i className={`${style.aboutIcon} bx bx-support`} />
        <h3 className={style.aboutTitle}>Support</h3>
        <span className={style.aboutSubTitle}>Online 24/7</span>
      </div>
    </div>
  )
}

export default Info
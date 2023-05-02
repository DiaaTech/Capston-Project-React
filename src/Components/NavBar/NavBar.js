import React from 'react'
import logo from '../../images/logo.svg'
import styles from './style.module.css'
import Button from '../Button/Button'

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <img src={logo} alt='Logo' />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Career</li>
      </ul>
      <Button />
    </div>
  )
}

export default NavBar

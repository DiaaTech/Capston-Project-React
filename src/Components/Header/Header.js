import React from 'react'
import styles from './Header.module.css'
import mobileImage from '../../images/image-mockups.png'
import Button from '../Button/Button'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easy bank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more
        </p>
        <Button />
      </div>
      <div className={styles.right}>
        <img src={mobileImage} alt='Image' />
      </div>
    </div>
  )
}

export default Header

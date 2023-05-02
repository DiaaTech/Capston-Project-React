import React from 'react'
import EachFeature from './EachFeature'
import styles from './Features.module.css'
import iconOnline from '../../images/icon-online.svg'
import iconBudgeting from '../../images/icon-budgeting.svg'
import iconOnboarding from '../../images/icon-onboarding.svg'
import iconApi from '../../images/icon-api.svg'

const Features = () => {
  const data = [
    {
      image: iconOnline,
      heading: 'Online Banking',
      paragraph:
        'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
      image: iconBudgeting,
      heading: 'Simple Budgeting',
      paragraph:
        'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    },
    {
      image: iconOnboarding,
      heading: 'Fast Onboarding',
      paragraph:
        'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    },
    {
      image: iconApi,
      heading: 'Open API',
      paragraph:
        'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
  ]

  return (
    <div className={styles.featureSection}>
      <div className={styles.heading}>
        <h1>Why Choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className={styles.features}>
        {data.map((eachF) => {
          console.log(eachF)
          return (
            <EachFeature
              heading={eachF.heading}
              image={eachF.image}
              paragraph={eachF.paragraph}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Features

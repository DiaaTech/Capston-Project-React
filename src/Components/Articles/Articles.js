import React from 'react'
import EachFeature from './EachArticle'
import styles from './Articles.module.css'
import imageConfetti from '../../images/image-confetti.jpg'
import imageCurrency from '../../images/image-currency.jpg'
import imagePlane from '../../images/image-plane.jpg'
import imageRestaurant from '../../images/image-restaurant.jpg'

const Features = () => {
  const data = [
    {
      image: imageCurrency,
      heading: 'Receive money in any currency with no fees',
      paragraph:
        'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    },
    {
      image: imageRestaurant,
      heading: 'Treat yourself without worrying about money',
      paragraph:
        'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    },
    {
      image: imagePlane,
      heading: 'Take your Easybank card wherever you go',
      paragraph:
        'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    },
    {
      image: imageConfetti,
      heading: 'Our invite-only Beta accounts are now live!',
      paragraph:
        'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    },
  ]

  return (
    <div className={styles.featureSection}>
      <div className={styles.heading}>
        <h1>Latest Articles</h1>
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

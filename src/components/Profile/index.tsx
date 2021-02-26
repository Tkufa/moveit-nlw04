import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './Profile.module.css'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img
        src="/avatar.png"
        alt="Rafael Goulart"
      />
      <div>
        <strong>Thiago Kufa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile

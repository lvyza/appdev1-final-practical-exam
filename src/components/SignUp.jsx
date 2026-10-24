import styles from './SignUp.module.css'
import blossomFlower from '../assets/blossom-flower.svg'

function SignUp() {
  return (
    <div className={styles.signup}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>
      </section>

      <section className={styles.rightSection}>
        <img
          src={blossomFlower}
          alt="Blossom flower"
          className={styles.blossom}
        />
      </section>
    </div>
  )
}

export default SignUp
import styles from './SignUp.module.css'
import { Input } from './ui/input'
import blossomFlower from '../assets/blossom-flower.svg'
import googleLogo from '../assets/icons-google-logo.svg'
import appleLogo from '../assets/icons-apple-logo.svg'

function SignUp() {
  return (
    <div className={styles.signup}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <label className={styles.agree}>
            <input type="checkbox" />
            <span>I agree to the terms & policy</span>
          </label>

          <button type="submit" className={styles.signupButton}>
            Signup
          </button>
        </form>

        <div className={styles.divider}>
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <div className={styles.socialButtons}>
          <button type="button" className={styles.socialButton}>
            <img src={googleLogo} alt="Google" />
            <span>Sign in with Google</span>
          </button>

          <button type="button" className={styles.socialButton}>
            <img src={appleLogo} alt="Apple" />
            <span>Sign in with Apple</span>
          </button>
        </div>

        <p className={styles.signInText}>
          Have an account? <span>Sign In</span>
        </p>
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
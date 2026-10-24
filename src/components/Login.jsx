import styles from './Login.module.css'
import blossomFlower from '../assets/blossom-flower.svg'
import googleLogo from '../assets/icons-google-logo.svg'
import appleLogo from '../assets/icons-apple-logo.svg'

function Login() {
  return (
    <div className={styles.signup}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Welcome back!</h1>

        <p className={styles.subtitle}>
          Enter your Credentials to access your account below
        </p>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.field}>
            <div className={styles.passwordLabel}>
              <label htmlFor="password">Password</label>
              <a href="#" className={styles.forgotPassword}>
                Forgot Password?
              </a>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <label className={styles.agree}>
            <input type="checkbox" />
            <span>Remember for 30 days</span>
          </label>

          <button type="submit" className={styles.signupButton}>
            Login
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

export default Login
import styles from '@/styles/Home.module.css'
import StyledButton from "../components/StyledButton";
import {Head} from "next/document";

export default function Home({toggleTheme}) : JSX.Element {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          Hi
            <StyledButton onClick={toggleTheme}>Toggle theme</StyledButton>
        </div>
      </main>
    </>
  )
}

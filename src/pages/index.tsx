import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
        <div className={styles.mainDiv}>
            <h1>Welcome to Pre"History"..</h1>
            
            <p>Where everything you learn is not supposed to have happended..</p>

            <Image src={"/thirteen.svg"} alt={"13"} width={500} height={500} />
        </div>        
  )
}

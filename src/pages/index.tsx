import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
        <div className={styles.mainDiv}>
            <h1>Welcome to Pre"History"..</h1>
           
            <p>What if i told you modern historians have been wrong..</p>
            <p>What if i told you mankind is much older then we thought..</p>
            <p>This is bias free website where facts are the only thing that matter.</p>
            <p>Where everything you learn here, is not supposed to have happened..</p>

            <Image src={"/thirteen.svg"} alt={"13"} width={500} height={500} />
        </div>        
  )
}

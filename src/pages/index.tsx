import Head from 'next/head'

import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
      <div>
        <Head>
            <title>
                Pre"History"
            </title>
        </Head>
        <div className={styles.mainDiv}>
            <h1>Welcome to Pre"History"..</h1>
           
            <p>What if I told you modern historians have been wrong..</p>
            <p>What if I told you mankind is much older then we thought..</p>
            <p>This is website where facts are the only thing that matter.</p>
            <p>Where everything you learn here, supposedly never happened..</p>

            <Image src={"/thirteen.svg"} alt={"13"} width={500} height={500} />
        </div>
      </div>
  )
}

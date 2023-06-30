import Navbar from './navbar'
import Footer from './footer'
import type { PropsWithChildren } from 'react'
import styles from '@/styles/Layout.module.css'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className={styles.MainDivLayout}>
            <Navbar />
            <div className={styles.BodyLayout}>
                <main className={styles.main}>{children}</main>
                <Footer />
            </div>
        </div>
    )
}

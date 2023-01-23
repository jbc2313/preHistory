import styles from '@/styles/Nav.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.main}>
            <div className={styles.linkDiv}>
                <Link className={styles.Link} href={'/'}>Home</Link> 
                <Link className={styles.Link} href={'/sites'}>Sites</Link>
                <Link className={styles.Link} href={'/worldmap'}>World</Link>
            </div>
        </div>

    )


}

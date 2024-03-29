import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
import SearchBar from './search_bar'

export default function Navbar() {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.main}>
                <p className={styles.Title}>Pre"History"</p>
                <div className={styles.linkDiv}>
                    <Link className={styles.Link} href={'/'}>Home</Link> 
                    <Link className={styles.Link} href={'/sites'}>Sites</Link>
                    <Link className={styles.Link} href={'/worldmap'}>World</Link>
                </div>
            </div>
            <div>
                <div className={styles.searchDiv}>
                <SearchBar />
                </div>
            </div>
        </div>

    )


}

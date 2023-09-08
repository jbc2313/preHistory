
import styles from '@/styles/SiteList.module.css'

export default function SiteList() {
    
    return (
        <div className={styles.SiteListMain}>
            <ul className={styles.SiteListUL}>
                <li>Göbekli Tepe</li>
                <li>Richat Structure</li>
            </ul>
        </div>
    )

}

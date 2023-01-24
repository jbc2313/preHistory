import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Sites.module.css'
import SiteList from '@/components/site_list'

export default function Sites() {
    
    return (
        <div className={styles.pageDiv}>
            <h1 className={styles.pageTitle}>Sites around the Globe..</h1>
            <SiteList />
        </div>

    )



}

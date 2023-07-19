import {useState} from 'react';
import styles from '@/styles/Search.module.css'


export default function SearchBar() {
    const [searchtext, setSearchText] = useState(""); 


    return (
        <div className={styles.main}>
            <p>Search</p>
            <form className={styles.form}>
                <input value={searchtext} type="text" />
            </form>
        </div>
    )

}

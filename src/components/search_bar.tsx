import {useState} from 'react';
import styles from '@/styles/Search.module.css'


export default function SearchBar() {
    const [searchtext, setSearchText] = useState<string | number | readonly string[]>();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const dontSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className={styles.main}>
            <p>Search</p>
            <form className={styles.form} onSubmit={dontSubmit}>
                <input className={styles.searchBox} value={searchtext} type="text" onChange={handleSearch} />
            </form>
        </div>
    )

}

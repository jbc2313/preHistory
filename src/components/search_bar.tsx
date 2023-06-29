import {useState} from 'react';


export default function SearchBar() {
    const [searchtext, setSearchText] = useState(""); 


    return (
        <div>
            <p>Search</p>
            <form>
                <input value={searchtext} type="text" />
            </form>
        </div>
    )

}

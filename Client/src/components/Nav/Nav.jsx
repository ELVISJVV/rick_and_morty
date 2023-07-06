import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function Nav({ onSearch, random,logout }) {
    return (
        <>
            <nav>
                
                <SearchBar onSearch={onSearch} random={random} />       
                <button onClick={() => {
                    onSearch(random)
                    
                
                }}>Agregar personaje random</button>
                <Link to="/about">
                    <h3 >About</h3>
                </Link>
                <Link to="/home">

                    <h3>Home</h3>
                </Link>
                <Link to="/favorites">

                    <h3>Favorites</h3>
                </Link>
                <button onClick={logout}>
                    Logout
                </button>
            </nav>
        </>
    )
}
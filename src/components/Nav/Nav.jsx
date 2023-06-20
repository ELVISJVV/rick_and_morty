import SearchBar from "../SearchBar/SearchBar"

export default function Nav({ onSearch, random }) {
    return (
        <>
            <nav>

                <SearchBar onSearch={onSearch} random={random} />       
                <button onClick={() => {
                    onSearch(random)
                    console.log(random)
                
                }}>Agregar personaje random</button>

            </nav>
        </>
    )
}
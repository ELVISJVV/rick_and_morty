import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites);

    return (  
        <>
            {favorites.map((character) => {
               return(

                <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    origin={character.origin}
                    gender={character.gender}
                    image={character.image}
                    onClose={character.onClose}
                />
               )
            })}
        </>
    );
}
 
export default Favorites;
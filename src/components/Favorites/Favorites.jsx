import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {filter, orderCards} from '../../redux/actions' 

const Favorites = () => {
    const [aux, setAux] = useState(false)
    const favorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch()
    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) =>{
        dispatch(filter(event.target.value))
        
    }


    return (  
        <>
        <select onChange={handleOrder} name="" id="">
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter} name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknow">unknow</option>
                <option value="allCharacters">AllCharacters</option>
        </select>
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
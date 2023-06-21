import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
            
            setCharacter(data);
         
        });
        return setCharacter({});
    }, [id]);

    return (
    
            <div>
            {
                character.name ? (

                <>
                        <h1 >{character.name}</h1>
                        <h2 >{character.status}</h2>
                        <h2 >{character.species}</h2>
                        <h2 >{character.gender}</h2>
                        <h2 >{character.origin?.name}</h2>

                        <img src={character.image} alt={`${character.name}`} />
                </>
                ) :(
                    <h3 >LOADING...</h3>
                )
            }
                
            </div>
        
    );
}

export default Detail;
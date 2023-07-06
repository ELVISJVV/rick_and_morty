import axios from 'axios';
const { ADD_FAV, REMOVE_FAV, FILTER, ORDER } = require("./action-types")


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';


    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character)
            if (!data) throw new Error('No se pudo agregar el personaje a favoritos')
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });

        } catch (error) {
            console.log(error.message);
        }

    };

}

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint)
           
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }


    };
}

export const filter = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}


export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

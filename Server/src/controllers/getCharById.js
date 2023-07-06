const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {

    try {
        const { id } = req.params
        const { data } = await axios(`${URL}/${id}`)

        if (!data.name) throw new Error(`Character with id ${id} not found`)

        const character = {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            gender: data.gender,
            origin: data.origin,
            image: data.image

        }
        return res.status(200).json(character)

        // return res.status(404).json({ message: 'Character not found' })

    } catch (error) {
        return error.message.includes('id')
        ? res.status(404).send(error.message)
            : res.status(500).send(error.response.data.error)
        // console.log(error.response.data.error);
    }




}




// const getCharById = (res,id) => {
//     const character = {}
//     axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`) //promise
//         .then(
//             ({ data }) => {
//                 character.id = data.id
//                 character.name = data.name
//                 character.status = data.status
//                 character.species = data.species
//                 character.type = data.type
//                 character.gender = data.gender
//                 character.origin = data.origin.name
//                 character.image = data.image
//                 res.writeHead(200, { 'Content-Type': 'application/json' });
//                 return res.end(JSON.stringify(character));
//             }
//         )

//         .catch((error) =>
//             res.writeHead(500, { "Content-Type": "text/plain" })
//                 .end(error.message)
//         )



// }

// const getCharById = (res,id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name,gender,species,origin,image,status}) => {
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin: origin.name,
//             image,
//             status
//         }
//         return res
//         .writeHead(200, { 'Content-Type': 'application/json' })
//         .end(JSON.stringify(character));
//     })
//     .catch((error) => {
//         return res
//         .writeHead(500, { 'Content-Type': 'text/plain' })
//         .end(error.message);
//     })
// }





module.exports = { getCharById }

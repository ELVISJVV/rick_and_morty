const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (req, res) => {
    const { id } = req.params

    axios(`${URL}/${id}`)
        .then(response => response.data)
        .then(({ status, origin, name, species, image, gender }) => {
            if (name) {
                const character = {
                    id,
                    name,
                    status,
                    // origin: origin.name,
                    origin,
                    species,
                    image,
                    gender
                }
                return res.status(200).json(character)
            }
            return res.status(404).json({ message: 'Character not found' })  
        })

    .catch((error) => res.status(500).json({message: error.message}))
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

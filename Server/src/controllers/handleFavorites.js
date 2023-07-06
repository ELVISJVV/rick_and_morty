let myFavorites = []

const postFav = (req, res) => {
    try {
        const character = req.body
        const characterFound = myFavorites.find((fav) => fav.id === character.id)
        if (characterFound) throw new Error('Character already exists')
        myFavorites.push(character)

        return res.status(200).json(myFavorites)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }



}

const deleteFav = (req, res) => {
    const { id } = req.params

    myFavorites = myFavorites.filter((character) => character.id !== +id)

    return res.status(200).json(myFavorites)
}


module.exports = { postFav, deleteFav }
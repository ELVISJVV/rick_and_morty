const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender":   "Male",
    "origin": {
        "name": "Earth (C-137)",
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}

describe("Rick and Morty API", () => {
    describe("GET /rickandmorty/characters/:id", () => {

        it("Responde con status: 200", async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200)
        })


        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'origin', 'image' y 'status'", async () => {
            const response = await request.get('/rickandmorty/character/1')
            for (const prop in character) {
                expect(response.body).toHaveProperty(prop)
            }
        }
            )
        

        it("SI hay un error, responde con status: 500", async () => {
            const response = await request.get('/rickandmorty/character/1g')
            expect(response.statusCode).toBe(500)
        })
    })



    describe("GET /rickandmorty/login", () => {
        const access = { access: true }
        it("Responde con un objeto con la propiedad acces en true si la contraseña es correcta", async () => {
            const response = await request.get('/rickandmorty/login?email=admin@admin.com&password=admin123')
            expect(response.body).toEqual(access)
        })


        it("Responde con un objeto con la propiedad acces en false si la contraseña es incorrecta", async () => {
            const response = await request.get('/rickandmorty/login?email=admin@admin.com&password=admin12ff3')
            access.access = false
            expect(response.body).toEqual(access)
        })
    })


    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post('/rickandmorty/fav').send(character)
            expect(response.body).toContainEqual(character)
        })

        it("Debe agregar personajes a favoritos sin eliminar los anteriores", async () => {
            character.id = 2
            character.name = "Morty Smith"
            const response = await request.post('/rickandmorty/fav').send(character)
            expect(response.body).toContainEqual(character)
            expect(response.body.length).toBe(2)
        })

    }
    )

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el id no existe me debe retornar todos los favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/2ss')
            expect(response.body.length).toBe(2)
        })

        it("Si el id existe me debe retornar todos los favoritos menos el eliminado", async () => {
            const response = await request.delete('/rickandmorty/fav/1')
            expect(response.body.length).toBe(1)
        })
        
    })
})

const {Pool} = require("pg")
const { request } = require("express")

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mockig",
    password: "ducko422",
    port: "5432",
})

const getImages = (request, response) => {
    pool.query('SELECT * FROM images', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const postImage = (request, response) => {
    const {title, image} = request.body
    pool.query('INSERT INTO images (title, image) VALUES ($1, $2)', [title, image], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`image added with id: ${results.id}`)
    })
}
const deleteImage = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM images WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`image deleted with id: ${id}`)
    })
}
const updateProfile = (request, response) => {
    const {name, description, profilepicture} = request.body
    pool.query('UPDATE profile SET name = $1, description = $2, profilepicture = $3', [name, description, profilepicture], 
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send("user profile updated")
    })
}
const getProfile = (request, response) => {
    pool.query('SELECT * FROM profile', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getImages,
    postImage,
    deleteImage,
    updateProfile,
    getProfile
}
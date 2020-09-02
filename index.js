const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const port = 3000
const db = require("./queries")
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get("/images", db.getImages)
app.post("/images", db.postImage)
app.delete("/images/:id", db.deleteImage)
app.put("/profile", db.updateProfile)
app.get("/profile", db.getProfile)

app.get("/", (request, response) => {
    response.json({
        info: "mock instagram api"
        
    })
})



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
const express = require("express")
const helmet = require("helmet")

const server = express()

const routerAction = require("./data/routers/routerAction")
const routerPost = require("./data/routers/routerProject")

server.use(express.json())

server.use("/actions", routerAction)
server.use("/projects", routerPost)

server.get("/", (req, res) => {
    res.send(`<h1>Welcome to Node Sprint</h1>`)
})

module.exports = server 
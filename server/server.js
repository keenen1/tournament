const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/#/', (req, res) => {
  res.redirect('/#/home')
})

module.exports = server

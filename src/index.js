/**
 * Imports digits file.
 *
 * @var {Array<{ target: number, pixels: number[]}>} digits
 */
const digits = require('./digits')

/**
 * Loads the library from node_modules.
 */
const express = require('express')

// Creates new express instance.
const app = express()

// Index page route.
app.get('/digit', (request, response) => {
  // Sets response type to JSON instead of plain text.
  response.setHeader('Content-Type', 'application/json')
  // Allows requests from other origins, not just localhost:8080.
  response.setHeader('Access-Control-Allow-Origin', '*')

  // Generates random number in the range <0; digits.length).
  const digitIndex = Math.floor(Math.random() * digits.length)

  // Responds with random digit in JSON.
  response.send(
    JSON.stringify(digits[digitIndex]),
  )
})

// Boots the server.
app.listen(8080, () => console.log(`[${new Date}] Server booted.`))

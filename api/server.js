import express from "express"
const server = express()
const PORT = process.env.PORT || 1999
import conn from "./config/db.js"


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

conn.connect()

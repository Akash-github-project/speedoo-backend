const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
const PORT = 3000

app.get("/camlist", (req, res) => {
  res.send({
    hello: "this is a message",
  })
})
app.listen(PORT, () => {
  console.log("server is listening on port 3000")
})

const express = require("express")
const cors = require("cors")
const pathlist = require("./api/pathlist")
const camlist = require("./api/camlist")

const app = express()
app.use(cors())
const PORT = 3000

app.use("/api/", pathlist)
app.use("/api/", camlist)

app.listen(PORT, () => {
  console.log("server is listening on port 3000")
})

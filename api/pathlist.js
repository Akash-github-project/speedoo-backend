const express = require("express")
const path = require("./path.json")
const router = express.Router()

router.get("/pathlist", (req, res) => {
  res.send({
    paths: path,
  })
})

module.exports = router

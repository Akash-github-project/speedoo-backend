const express = require("express")
const cams = require("./cams.json")
const router = express.Router()

router.get("/camlist", (req, res) => {
  res.send({
    cams: cams,
  })
})

module.exports = router

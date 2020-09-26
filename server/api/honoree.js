const router = require('express').Router()
const {Honor} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const awards = await Honor.findAll()
    res.json(awards)
  } catch (err) {
    next(err)
  }
})

const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Honor = db.define('honor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Honor

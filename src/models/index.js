'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users.model');

const DATABASE_URL = `${process.env.DATABASE_URL}`;


const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  db: sequelize,
  users: userSchema(sequelize, DataTypes),
}
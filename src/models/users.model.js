'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const API_SECRET = process.env.API_SECRET || 'some secret word';


const userSchema = (sequelize, DataTypes) => {
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.VIRTUAL
  }
});

Users.beforeCreate(async (user) => {
    let hashedPass = await bcrypt.hash(user.password, 10);
    user.password = hashedPass;
  });



// we attached a function to our Users Model
Users.authenticateBasic = async function (username, password) {
  // get the user form the database 
  const user = await Users.findOne({ where: { username } }); // select * from Users where username='tamim';
  // compare the users' password from the DB with the on that was submitted in the form
  const valid = await bcrypt.compare(password, user.password);
  // if the user is validated, we will create a new token for that user using the jsonwebtokenlibaray

  if (valid) {
    let newToken = jwt.sign({ username: user.username }, API_SECRET);
    user.token = newToken;
    return user;
  } else {
    throw new Error('Invalid User');
  }
}

Users.authenticateBearer = async function (token) {
  // check with the jwt if the token is proper
  const parsedToken = jwt.verify(token, API_SECRET); // the parsed token payload, we are parsing the data using the Secret Key
  // then find a user that has the data from the payload
  const user = await this.findOne({ where: { username: parsedToken.username } });
  // if there is, then get the user model
  if (user.username) {
    return user;
  } else {
    // if not, throw error
    throw new Error('Invalid Token');
  }

}
}

module.exports = userSchema;
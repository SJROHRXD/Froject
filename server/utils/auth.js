const jwt = require('jsonwebtoken');

const secret = 'superdupersecret';
const expiration = '2h';

module.exports = {
  signToken: function ({ name, _id }) {
    const payload = { name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
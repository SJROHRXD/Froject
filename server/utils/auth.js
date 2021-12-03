const jwt = require("jsonwebtoken");

const secret = "superdupersecret";
const expiration = "2h";

module.exports = {
  signToken: function ({ name }) {
    const payload = { name };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

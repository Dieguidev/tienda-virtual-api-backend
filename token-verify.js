const jwt = require('jsonwebtoken');

const secret = 'myDog';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4MDQ0OTAwNn0.9Xqy7dtJ8cWXs-rz8jZ7OQ_sh9N_feOUJV61hu-w50Q'

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
};

const payload = verifyToken(token, secret);

console.log(payload);

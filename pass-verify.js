const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$8AM5qMNMcuwyCcowCNx/t.4fT1tOKZO756k8aqhNebrzIHZwqR5gG';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword()

const fs = require('fs');

var logger = fs.createWriteStream('access.log', { flags: 'a' });

module.exports = logger;
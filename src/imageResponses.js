const fs = require('fs');

const spongeImg = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

exports.getSponge = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongeImg);
  response.end();
};

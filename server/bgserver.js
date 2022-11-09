require('dotenv').config();

const {
  Server,
  Origins
 } = require("boardgame.io/server");
const { Apples } = require("../src/game/Apples");

let staticServer = '';
if (window.location) {
  const { protocol, hostname, port } = window.location;
  console.log('static server protocol: ', protocol, 'static server hostname: ', hostname, 'static server port: ', port);
  staticServer = `${protocol}//${hostname}:${port}`;
}

const server = Server({
  games: [Apples],
  origins: [`http://localhost:${process.env.EXPRESS_PORT}`, Origins.LOCALHOST_IN_DEVELOPMENT, `http://localhost:${process.env.APP_PORT}`, `http://localhost:${process.env.PG_PORT}`, staticServer, 'ec2-54-67-15-13.us-west-1.compute.amazonaws.com', '54.67.15.13:3000', 'http://54.67.15.13:3000' ],
});
const bgPort = process.env.BG_PORT;
server.run(bgPort, () => {
  console.log(`bg server listening on port ${bgPort}`);
});

module.exports = server;

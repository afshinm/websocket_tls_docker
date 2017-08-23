const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('server received a new connection');

  ws.on('message', (message) => {
    console.log('server received: %s', message);

    ws.send('pong');
  });
});

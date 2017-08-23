const WebSocket = require('ws');

console.log('starting connection to ws...');
 
const ws = new WebSocket('wss://ws.example.com', { rejectUnauthorized: false });

ws.on('open', function open() {
  console.log('connection opened.');

  setInterval(() => {
    ws.send('ping');
  }, 2000);
});

ws.on('close', function open() {
  console.log('connection closed.');
});

ws.on('message', function (data) {
  console.log('client received: %s', data);
});

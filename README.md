# Example of Websocket over TLS with Nginx

Docker image of Websocket server, Nginx as reverse proxy + TLS


## Requirements

You need to have the latest version of Docker installed (+ docker-compose).


## Setup

### Step 1

The first step is adding `ws.example.com` to your `/etc/hosts` and point it to `127.0.0.1` (or your Docker host IP, if it's not your local machine)

We will use this fake domain to send the requests on a local machine.

### Step 2

If you to test it on your local machine, you need to create a self-signed SSL certificate.  

Here is a example of how to generate a self-signed certificate: https://gist.github.com/jessedearing/2351836

Please note that you have to generate the certificate for `ws.example.com`. After generating the certificates, save them to `./cert` with this convention: `ws.example.com.key` and `ws.example.com.cert`.

## Run

Go to the root directory and run:

```
docker-compose up --build
```

Then, you should be able to see the traditional ping-pong message between client and the server in your terminal, like so:

```
ws.client         | starting connection to ws...
ws.client         | connection opened.
ws.example.com    | server received a new connection
ws.client         | client received: pong
ws.example.com    | server received: ping
ws.client         | client received: pong
ws.example.com    | server received: ping
ws.client         | client received: pong
ws.example.com    | server received: ping
ws.client         | client received: pong
```

This connection is _kinda_ secure (it connects to `wss://ws.example.com`)


## License

Unlicensed.

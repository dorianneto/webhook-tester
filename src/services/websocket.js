import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_WEBSOCKET_SERVER_URL, {
  autoConnect: false,
  transports: ['websocket', 'polling']
});

const connect = (token) => {
  socket.io.opts.query = {
    token
  };

  socket.connect();
};

const disconnect = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

const getMessage = (message, callback) => socket.on(message, callback);

export {
  connect,
  disconnect,
  getMessage,
}

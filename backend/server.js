const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

io.on('connection', (socket) => {
  socket.on('send-message', (payload) => {
    const { id, senderId, conversation, text, createdAt } = payload;
    console.log(JSON.stringify(payload));
    // send to myself
    socket.emit('receive-message', { payload });

    // conversation.contacts.forEach((contact) => {
    //   socket.to(contact.id).emit('receive-message', {
    //     text,
    //   });
    // });
    // socket.emit('receive-message', { message: 'halo juga' });
  });

  // socket.on('send-message', ({ recipients, text }) => {
  //   recipients.forEach((recipient) => {
  //     const newRecipients = recipients.filter((r) => r !== recipient);
  //     newRecipients.push(id);
  //     socket.broadcast.to(recipient).emit('receive-message', {
  //       recipients: newRecipients,
  //       sender: id,
  //       text,
  //     });
  //   });
  // });
});

httpServer.listen(5000);

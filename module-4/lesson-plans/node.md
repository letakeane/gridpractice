# Intro to Node

## Final Example Server

```js
// include built-in http and url libraries from node
// you do not have to do an npm install to get these
const http = require('http');
const url = require('url');

// create the http server
const server = http.createServer();

// setup mock message data
let messages = [
  { 'id': 1, 'user': 'brittany storoz', 'message': 'hi there!' },
  { 'id': 2, 'user': 'bob loblaw', 'message': 'check out my law blog' },
  { 'id': 3, 'user': 'lorem ipsum', 'message': 'dolor set amet' }
];

// tell the server to listen on port 3000
server.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.');
});



// retreive all messages from the messages array
// we must pass in the response object as a parameter
// so that we can write an appropriate response
const getAllMessages = (response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(messages));
  response.end();
}



// get a single message by id
const getSingleMessage = (id, response) => {

  // find the message that has an id matching the one passed in as a query param
  // if it exists, return a 200 response with that message object
  // otherwise return a 404 saying that message does not exist
  let matchingMessage = messages.find(message => message.id == id);

  if (matchingMessage) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(matchingMessage));
  } else {
    response.writeHead(404, { 'Content-Type': 'plain/text' });
    response.write(`Cannot find message with an id of ${id}`);
  }

  response.end();
};



// add a message to our message array
const addMessage = (newMessage, response) => {
  messages.push(newMessage);

  response.writeHead(201, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(messages));
  response.end();
}



server.on('request', (request, response) => {
  if (request.method === 'GET') {
    let urlParts = url.parse(request.url, true);
    let query = urlParts.query;

    // Will be true if url is structured like localhost:3000?id=1
    if (query.id) {
      getSingleMessage(query.id, response);
    } else {
      getAllMessages(response);
    }
  }

  else if (request.method === 'POST') {
    let newMessage = { 'id': new Date() };

    request.on('data', (data) => {
      newMessage = Object.assign(newMessage, JSON.parse(data));
    });

    request.on('end', () => {
      addMessage(newMessage, response);
    });
  }
});
```
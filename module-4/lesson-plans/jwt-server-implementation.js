// =================================================================
// require all necessary packages ==================================
// =================================================================

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');




// =================================================================
// app setup & configuration =======================================
// =================================================================

app.set('port', 3000);
app.set('secretKey', 'foo');

app.locals.trains = [
  { id: 1, line: 'green', status: 'running' },
  { id: 2, line: 'blue', status: 'delayed' },
  { id: 3, line: 'red', status: 'down' },
  { id: 4, line: 'orange', status: 'maintenance' }
];

app.use(bodyParser.json());


// Create a function to check the authentication for private endpoints
const checkAuth = (request, response, next) => {

  // Check headers/POST body/URL params for an authorization token
  const token = request.body.token || 
                request.param('token') || 
                request.headers['authorization'];

  // If a token is found, decode and verify it
  if (token) {
    jwt.verify(token, app.get('secretKey'), (error, decoded) => {

      // If the token is invalid or expired, respond with an error      
      if (error) {
        return response.json({ success: false, message: 'Invalid authorization token.' });    
      }

      if (!decoded.admin) {
        return response.status(403).json({ error: 'You must be an admin to use this endpoint.' }); 
      }

      // If the token is valid, save the decoded version to the
      // request for use in other routes & continue on with next()
      else {
        request.decoded = decoded;  
        next();
      }
    });
  }

  // If no token is found, respond with a 403 Forbidden error
  else {
    return response.status(403).json({
      error: 'You must be authorized to hit this endpoint'
    });
  }
}





// =================================================================
// API Endpoints ===================================================
// =================================================================

app.get('/api/v1/trains', (request, response) => {
  response.status(200).json(app.locals.trains);
});

app.post('/authenticate', (request, response) => {
  let user = request.body;

  if (user.email === 'bobloblaw@gmail.com') {
    user.admin = true;
  }

  let token = jwt.sign(user, app.get('secretKey'), {
    expiresIn: 172800 // expires in 48 hours
  });

  response.status(201).json({ token });
});

app.patch('/api/v1/trains/:id', checkAuth, (request, response) => {
  const train = request.body;
  const { id } = request.params;
  const index = app.locals.trains.findIndex((m) => m.id == id);

  if (index === -1) { return response.sendStatus(404); }

  const originalTrain = app.locals.trains[index];

  app.locals.trains[index] = Object.assign(originalTrain, train);


  return response.status(200).json(app.locals.trains[index]);
});





// =================================================================
// start the server ================================================
// =================================================================

app.listen(app.get('port'), () => {
  console.log(`Listening on http://localhost:${app.get('port')}`);
});
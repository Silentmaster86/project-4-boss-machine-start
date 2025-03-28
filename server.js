const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// 1. Add middleware for handling CORS requests from index.html
app.use(cors());  // Using default CORS settings to allow all domains

// 2. Add middleware for parsing request bodies here:
app.use(bodyParser.json());  // Parses incoming JSON requests

// 3. Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);  // Mount the router to handle API routes

// 4. This conditional is here for testing purposes:
if (!module.parent) { 
  // 5. Start the server listening at PORT
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

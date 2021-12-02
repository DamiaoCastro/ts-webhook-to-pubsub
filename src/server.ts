const express = require('express');
import { Webhook } from './webhook';

async function startServer() {

  const appExpress = express();

  //security layer
  //..

  // Setup the only endpoint to post messages on.
  let webhook = new Webhook(process.env);
  appExpress.post('/webhook', webhook.handler);

  // Start listening on the http server.
  const port = process.env.PORT || 8080;
  appExpress.listen(port, () => { console.log(`http server listening on port ${port}`); });

}

startServer();
// import * as https from 'https';

// import App from './App'; 
// import Environments from './Environment/Environment';

//  const env: Environments = new Environments( process.env.NODE_ENV );
//  const app:App = new App(env);
// let server: https.Server;

//  app.init().then(()=>{
//     server = app.httpsServer; // http.createServer(App);
    
//     server.listen(env.port);
//     console.log(process.env.NAME);
//     console.log('running in port ' + env.port);
//  });
 
//  // new App(process.env.NODE_ENV)
// // .init().then(()=>{
// //  console.log('Hello');   
// // });

import { Server } from './App';
Server.start();
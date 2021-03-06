import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import { App } from '../components/App';
//@ts-ignore
import Routes from '../components/routes';
import express, { Application, Request, Response, NextFunction } from 'express';
import { renderToString } from 'react-dom/server';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
import validator from 'express-validator';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'connect-flash';
import Error from '../interfaces/Error';


import regRouter from './routers/registration';
import accountSw from './routers/accountSw';
import taxesRouter from './routers/taxes';
import amlRouter from './routers/aml';
import companiesSw from './routers/companiesSw';
import businessSw from './routers/businessSw';
import about from './routers/about';
import errorSw from './routers/error';
import investmentStart from './routers/investmentStart';
import development from './routers/development';
import blog from './routers/blog';
import emTech from './routers/emTech';

import chRouter from './routers/check';
const app: Application = express();
const CONNECTION_URI: any = process.env.MONGODB_URI;
//const port = process.env.PORT || 5000;

require('dotenv/config');

mongoose.connect(
  CONNECTION_URI || process.env.CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log('Connection with database Users completed');
  }
);

/*
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.messages.create({
  to: '+420775650705',
  from: '+447588664528',
  body: 'Забей калик ежжи!'
}).then((message) => console.log(message.sid));
*/

app.use(function(req: Request, res: Response, next: NextFunction) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0");
  //res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/registration', regRouter);
app.use('/check', chRouter);
app.use('/account_in_sw', accountSw);
app.use('/taxes', taxesRouter);
app.use('/aml_control', amlRouter);
app.use('/swiss_companies_setup', companiesSw);
app.use('/business_in_switzerland', businessSw);
app.use('/about', about);
app.use('/error', errorSw);
app.use('/investment_club_start', investmentStart);
app.use('/business_development', development);
app.use('/blog', blog);
app.use('/emtech_in_davos', emTech);

app.get('*', (req: Request, res: Response, next: NextFunction) => {
  const activeRouter: any = Routes.find((route: any) => matchPath(req.url, route)) || {};
  const promise = activeRouter.fetchInitialData ?
                  activeRouter.fetchInitialData(req.path) :
                  Promise.resolve()
  promise.then((data: any) => {
    const context: object = { data };
    const user:object = { name: "Artem" };
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
           <App data={data}/>
        </StaticRouter>
      )

      const html =
        `<!DOCTYPE html>
            <html>
                <head>
                  <title>collab</title>
                  <link rel="stylesheet" type="text/css" href="../main.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src='bundles/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(user)}</script>
                            <title>COLLAB</title>
                          </head>
                        <body>
                       <div id="app">
                     ${markup}
                  </div>
                </body>
            </html>`;

        return res.send(html);
  }).catch(next)
});
/*
app.use((error:any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status);
    res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
});
*/

app.use((req: Request, res: Response, next: NextFunction) => {  //<-- заменить если появится непредвиденная ошибка
     var err: Error = new Error('Noooo');
     err.status = 404;
     next (err);
});


app.listen(8888, () => {console.log('Server started!')});

import React from 'react';
import express, { Request, Response, NextFunction } from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Main from '../../components/Main';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  let cond: boolean = req.isAuthenticated();
  const congrats = renderToString(
    <StaticRouter>
       <Main />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
    );
});

function notLoggedIn(req: Request, res: Response, next: NextFunction) {
  if(!req.isAuthenticated()) {
    return next()
  }
  res.redirect('/profile');
}

export default router;

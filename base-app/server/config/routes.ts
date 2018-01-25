
// DEPENDENCIES
import * as express from 'express';
import * as path from 'path';

// CONTROLLERS
import { LoginRegController } from './../controllers/login-reg.controller';

// object routes contains the master route paths for the app
export const routes = (app: express.Express) => {
    
    // User Login and Registration Routes
    app.get('/api/is-logged', (req, res) => LoginRegController.checkSessionFor(req, res, '_id'));
    app.post('/api/register', (req, res) => LoginRegController.registerUser(req, res));
    app.post('/api/login', (req, res) => LoginRegController.loginUser(req, res));
    app.get('/api/logout', (req, res) => LoginRegController.clearSessionFor(req, res, '_id'));

    // Base route and serves frontend
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../client/WebApp/dist/index.html')));
};

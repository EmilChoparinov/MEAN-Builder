
// initializes basic configuration requirements for express
import { app, PORT } from './config/init';

// initializes basic configuration requirements for mongoose
import './config/mongoose';

// gets the master route object to be fed next into the app object
import { routes } from './config/routes';

// add all listeners to all the routes given my the master routes
// object
routes(app);

// initializes the server on given PORT
app.listen(PORT, () => console.log(`listening on port ${PORT}\n`));

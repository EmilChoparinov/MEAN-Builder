
// DEPENDENCIES
import * as mongoose from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';

// connects to mongodb's host route for queries to
// the given database
mongoose.connect('mongodb://localhost/loginreg');

// for loops through the models directory and adds
// each file of a model to this mongoose.ts file
// this will initialize all collection in the database
fs.readdirSync(path.join(__dirname, './../models/')).forEach((model) => {

    // only add model if file extension ends in .ts
    if (model.indexOf('.ts') > 0) {
        require(path.join(__dirname, `./../models/${model}`));
    }
});

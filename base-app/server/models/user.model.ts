
// DEPENDENCIES
import * as mongoose from 'mongoose';
import { IUserModel } from '../json-formats/mongo-interfaces/user-model.mongo';


// defines the user schema model that will be the base format 
// for the user collection
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'first name is required'],
        minlength: [3, 'first name must be at least 3 characters long'],
        maxlength: [255, 'first name cannot be longer than 255'],
    },
    lastName: {
        type: String,
        required: [true, 'last name is required'],
        minlength: [3, 'last name must be at least 3 characters long'],
        maxlength: [255, 'last name cannot be longer than 255'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        validate: {
            validator: (email: string) => {

                // does a validation on an email regex of the given string
                return /[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(email);
            },
            msg: '{VALUE} is an invalid email'
        },
        maxlength: [255, 'email cant be longer than 255']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        validate: {
            validator: (password: string) => {

                // does a validation on a password regex of the given string
                return /^[A-Za-z\d$@$!%*?&]{4,}$/.test(password);
            },
            msg: 'password entered is invalid'
        },
        maxlength: [255, 'password cannot be longer than 255']
    }

}, { timestamps: true });

// adds the schema as a collection
mongoose.model('user', UserSchema);

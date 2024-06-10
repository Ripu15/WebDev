/*
Todo {
    title: string,
    description: string,
    completed: boolean
}
*/

//importing 'mongoose' library for mongodb
const mongoose = require("mongoose");

//conecting to monodb 
/* This should not be done as everyone on github can see it
Its a security vulnerability */
mongoose.connect("");

//defining schema for todo data
//Schema API is used for defining the 
//structure and behavior of MongoDB documents
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

//The Model.create() method of the Mongoose API 
//is used to create single or many documents in the collection. 
//Mongoose by default triggers save() internally when we use the create() method on any model.
//'todos' is table-name  created
const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}

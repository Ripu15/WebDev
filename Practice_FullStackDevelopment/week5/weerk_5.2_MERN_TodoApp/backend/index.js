//express boiler plate with express.json as middleware

const express = require("express");
//When you encounter a CORS (Cross-Origin Resource Sharing) error, 
//it means that your web application is attempting to make a request 
//to a different domain than the one serving the web page, and the server is not allowing this request.
const cors = require("cors");

const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
//to parse json body
app.use(express.json());
//now below backend can hit frontend 
app.use(cors({
    origin: "http://localhost:5173"
}));

/*
body{
    title: string;
    description: string
}
 */
app.post("/todos",async function(req,res){

    /*     zod validation      */
    const createPayload = req.body;
    //safeParse() is a method in Zod that allows you to parse data safely
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.statusCode(411).json({
            msg: "Wrong Inputs !!! "
        })
        return;
    }
    /*
        If data parsin or zod validation is successful then:
    */
    //put it in mongodb(database)
    
    //todo is model instance
    //The Model.create() method of the Mongoose API 
//is used to create single or many documents in the collection. 
//Mongoose by default triggers save() internally when we use the create() method on any model.
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg : "Todo Created !!! "
    })

})

app.get("/todos",async function(req,res){
    //find({})- gives all todos to the  users
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    //capturing body from client side
    const updatePayload = req.body;
    //It allows you to parse and validate data against a Zod schema,
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.statusCode(411).json({
            msg: "You sent the Wrong Inputs !!! "
        })
        return;       
    }   
    //if data is valid , then put todo data in mongodb
    //updating in mongodb(database)
    //The update() function 
    //is used to update one document in the database
    //6666c715dc560247ae982aff
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo Marked as COMPLETED"
    })

})

app.listen(3000);
//cors error:
//frontend on localhost:3000 can not hit
//backend on localhost:5173
//Unless ur backend allows that frontend
//for solution plz run command:
//npm install cors


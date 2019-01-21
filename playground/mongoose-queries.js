const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");


const {User} =require("./../server/models/user");


/*
var id = "5c3df686d0307f1c1ccff38811";

if(!ObjectID.isValid(id))
{
    console.log("ID is not valid");
}


Todo.find({
    _id: id
}).then((todos)=>{
    console.log("Todos",todos);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log("Todo",todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log("Id not found");
    }
    console.log("Todo find by id",todo);
}).catch((e)=>console.log(e))};*/

User.findById("5c1a74ca15bfb71d306e7bb7").then((pepa)=>{
    if (!pepa){
        return console.log("User id not found");
    }
    console.log(JSON.stringify(pepa,undefined,2));
},(e)=> console.log(e));
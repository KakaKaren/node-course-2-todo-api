const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");


const {User} =require("./../server/models/user");

/*
Todo.remove({}).then((result)=>{
    console.log(result);
*/




Todo.findOneAndRemove("5c76c3fc06ff2ce130c4bd5c").then((todo)=>{
    console.log(todo);
});
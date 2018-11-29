//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>
{
    if(err)
    {
       return console.log('Unable to connect to mongoDB server.');
    }
        console.log('Connected to mongoDB server');
       //  const db = client.db('TodoApp')
/*
        db.collection('Todo').insertOne(
            {
              text:'Something to do',
              completed: 'false'
            },(err,result)=>
            {
                if(err)
                {
                    return console.log('Unable to insert todo',err);
                }
                console.log(JSON.stringify(result.ops,undefined,2));
            });

         const db = client.db('Users')
         db.collection('Users').insertOne(
             {
                 Name: 'Karen',
                 Age: '33',
                 Location: 'West Palm Beach Florida'
             },(err,result)=>{
                if(err)
                {
                    return console.log('Unable to insert user',err);
                }
                console.log(result.ops[0]._id.getTimestamp());
             });


        client.close();
        */
});
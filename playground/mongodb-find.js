//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>
{
    if(err)
    {
       return console.log('Unable to connect to mongoDB server.');
    }
        console.log('Connected to mongoDB server');
       
     //  const db = client.db('TodoApp');
       const db = client.db('Users');
      /*
        db.collection('Todo').find({
            _id:new ObjectID("5beaf3edda7fe7b1a76d6f8f")
        }).toArray().then((docs) =>
        {
           console.log('Todo');
           console.log(JSON.stringify(docs,undefined,2));
        },(err)=>
        {
            console.log('Unable to fetch todos',err);
        });
       */

   //   db.collection('Todo').find().count().then((count) =>{
    
   //   console.log(`Todo count:' ${count}`);
   //     },(err)=>
   //  {
   //    console.log('Unable to fetch todos',err);
  //  });

 /* db.collection('Users').find({Name:"Manuel"}).toArray().then((docs) =>
  {
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>
    {
        console.log('Unable to count the name',err)
    });
*/
    db.collection('Users').find({Name:"Karen"}).count().then((count) =>
    {
      console.log(`The name Karen are: ${count}`);
    },(err)=>
      {
          console.log('Unable to count the name',err)
      });
      //  client.close();

        
});
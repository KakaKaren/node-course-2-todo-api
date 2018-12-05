const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>
{
    if(err)
    {
       return console.log('Unable to connect to mongoDB server.');
    }
        console.log('Connected to mongoDB server');

  // const db = client.db('TodoApp');
     const db = client.db('Users');
   /*  
   const db = client.db('Users');
   db.collection('Users').find({Name:"Karen"}).count().then((count) =>
    {
      console.log(`The name Karen are: ${count}`);
    },(err)=>
      {
          console.log('Unable to count the name',err)
    });*/

   /* ----deleteMany------
   db.collection ('Todo').deleteMany({text: 'Eat lunch'}) .then((result) =>
    {
        console.log(result);
    });*/

  /* ------deleteOne----
    db.collection ('Todo').deleteOne({text: 'Eat lunch'}) .then((result) =>
    {
        console.log(result);
    });*/
   

    /* -------findOneAndDelete
    db.collection('Todo').findOneAndDelete({completed: false}).then((result) =>
    {
        console.log(result);
    }); */

 //   db.collection('Users').deleteMany({Name: "Karen"});
 
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5be33cbe1e2f7d34d0d6a344")
    }).then((pepa) => 
  {
      console.log(JSON.stringify(pepa,undefined,2));
  });  
  

    

});
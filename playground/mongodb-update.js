const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>
{
    if(err)
    {
       return console.log('Unable to connect to mongoDB server.');
    }
        console.log('Connected to mongoDB server');

     /*   const db = client.db('TodoApp');

        db.collection('Todo').findOneAndUpdate
        ({
             _id: new ObjectID('5c0801ca0b0eedaf44d7792d')
        },
        {
            $set:
            {
                completed: true
            }
        },
            {
                returnOriginal: false
            }).then((result)=>
            {
                console.log(result)
            })*/

            const db = client.db('Users');
           db.collection('Users').findOneAndUpdate
            ({
                _id: new ObjectID('5c0822930b0eedaf44d78156')
             },
            {
                $set:
                {
                    Name: 'Karen Ann'
                },
                $inc : 
                {
                    Age: 2
                }, 
                
            },           
            {
                returnOriginal:false
            }).then((result)=>
            {
                console.log(result);
            })

           

         
            
     });
           
 
         

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server!');
});

// MongoDB configuration
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = 'mongodb+srv://kunalrawal78:bhanwarlal@cluster0.riipfbq.mongodb.net/';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1, // Corrected the version property
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    //creating collections
const bookCollection=client.db("BookInventory").collection("books")
//inserting book
app.post('/upload-book',async(req,res)=>{
const data=req.body;
const result=await bookCollection.insertOne(data);
res.send(result);
})

//get all books from database

app.get('/allbooks',async(req,res)=>{
const books=  bookCollection.find({});
const result=await books.toArray();
res.send(result);
})

//update books
app.patch('/book/:id',async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const updatebookdata=req.body;
    const filter={_id: new ObjectId(id)}

    const updateDoc={
        $set:{
            ...updatebookdata
        },
    }
     const options ={upsert:true}
    const result=await bookCollection.updateOne(filter,updateDoc,options);
    res.send(result);
})

app.delete('/book/:id',async(req,res)=>{
  const id=req.params.id;
  const filter={_id:new ObjectId(id)};

  const result=await bookCollection.deleteOne(filter);
  res.send(result)
})

//find by category
app.get('/all-books', async (req, res) => {
  let query = {};
  if(req.query?.category) {
    query = { category: req.query.category };
    
  }
  const result = await bookCollection.find(query).toArray();
  res.send(result);
});

/// to get single / specific book data
app.get("/book/:id",async(req,res)=>{
const id=req.params.id;
const filter={_id:new ObjectId(id)};
const result=await bookCollection.findOne(filter);
res.send(result);
})




    await client.db("admin").command({ ping: 1 });
    console.log('Successfully connected to MongoDB');
  } finally {
    // Add cleanup or additional actions if needed
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is working at port ${port}`);
});

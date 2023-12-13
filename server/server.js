const express = require("express")
const app = express()

const cors = require("cors");
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
app.use(cors());  
app.use(bodyParser.json());

const uri = 'mongodb+srv://nk2920:pullout@cluster0.up9rpdq.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri); 
const db = client.db("keeper"); 
const port = process.env.PORT || 5000;

const ObjectId = require('mongodb').ObjectId;

async function connect() {
    try {
      await client.connect(uri);
      console.log("Connected to MongoDB!");
      app.listen(port, "0.0.0.0", ()=> {console.log(`server started on ${port}`)})
    } catch (error) {
        console.log(error);
    }
}


app.get("/api", async (req, res) =>{
    const data = await db.collection("notes").find().toArray();
    res.send(data);
});

app.post("/api/addNote", async (req, res) => {
    console.log("add req received");
    const data = req?.body;

    const result = await db.collection("notes").insertOne(data);
    res.send(result);
})

app.delete("/api/removeNote/:id", async (req, res) => {
    console.log("delete req received");

    const result = await db.collection("notes").deleteOne( { "_id" : new ObjectId(req.params.id)} );
    res.send(result);
})

connect().catch(console.error);

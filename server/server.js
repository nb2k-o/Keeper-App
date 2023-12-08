const express = require("express")
const mongoose = require("mongoose")
const app = express()

const uri = 'mongodb+srv://nk2920:pullout@cluster0.up9rpdq.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB!");
      app.listen(port=5000, ()=> {console.log("server started on 5000")})
    } catch (error) {
        console.log(error);
    }
}


app.get("/api/notes", async (req, res) =>{
    const data = await db.collection("notes").find().toArray();
    res.send(data);
});

app.post("/api/notes", async (req, res) => {
    console.log("req received");
    const data = req?.body;

    const result = await db.collection("notes").insertOne(data);
    res.send(result);
})

// app.delete("/api/note/{id}", async (req, res) => {
//     console.log("req received");
//     const result = await db.collection("notes").delete(data);
//     res.send(result);
// })

connect().catch(console.error);
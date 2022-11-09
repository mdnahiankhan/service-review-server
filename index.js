const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');


const app = express()
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://<username>:<password>@cluster0.kzjjck3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});




app.get('/', (req, res) => {
    res.send('service review server is running')
})

app.listen(port, () => {
    console.log(`service review server running on port${port}`);
})
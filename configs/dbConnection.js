const mongoose = require("mongoose");
const uri =
  "mongodb+srv://njogaelisha:Admin%402024@cluster0.zfj7mga.mongodb.net/contacts-db?retryWrites=true&w=majority";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(uri);
    console.log(
      "database connection established",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    // Ensures that the client will close when you finish/error
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     const databaseName = client.db().databaseName;
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!",
//       databaseName
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// module.exports = run;

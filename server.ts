// import connectDb from "./src/configs/dbConnection";
import { config } from "dotenv";
import errorHandler from "./src/middleware/errorHandler";
import express from "express";
import router from "./src/routes/contactRoute";
const app = express();

// Load environment variables
config();

const port = parseInt(process.env.PORT || "2000", 10); // Ensure port is a number

// Connect to database (assuming asynchronous connection)
// connectDb()
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((err) => {
//     console.error("Error connecting to database:", err);

//   });

app.use(express.json());

// Mount contact routes (assuming contactRoute is a TS module)
app.use("/api/contacts", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

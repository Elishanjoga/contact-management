import { Sequelize } from "sequelize";
import { User } from "./src/models/contactModel";
// import connectDb from "./src/configs/dbConnection";
import { config } from "dotenv";
import errorHandler from "./src/middleware/errorHandler";
import express from "express";
import router from "./src/routes/contactRoute";
// sync.js
import { sequelize } from "./src/configs/dbConnection";
const app = express();

// Load environment variables
config();

const port = parseInt(process.env.PORT || "2000", 10); // Ensure port is a number
const env = process.env.NODE_ENV || "development"; // Get environment from environment variable

//start database connection
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

syncDatabase();
//end database connection

app.use(express.json());
app.get("/", (req: any, res: any) =>
  res.send({ status: "I'm up and running - Contacts test" })
);
// Mount contact routes (assuming contactRoute is a TS module)
app.use("/api/contacts", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(
  "mongodb+srv://admin:F4XfgB3RVyABFAGF@cluster0.mqzcy.mongodb.net/TimelessFamilyRecipesData?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("TimelessFamilyRecipesData");
  console.log("object");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;

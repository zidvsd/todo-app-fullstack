import { getDB } from "../db.js";
import dotenv from "dotenv";

dotenv.config();

const dbCollectionName = process.env.DB_COLLECTION;
export const getTodos = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(dbCollectionName);

    const results = await collection.find().toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching todos", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

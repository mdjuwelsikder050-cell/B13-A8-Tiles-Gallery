import { MongoClient } from "mongodb";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}


const globalForMongo = globalThis;
if (!globalForMongo._mongoClient) {
  globalForMongo._mongoClient = new MongoClient(uri);
}

export const client = globalForMongo._mongoClient;
export const db = client.db(process.env.MONGODB_DB || "tiles_gallery");

import { MongoClient } from "mongodb";

export async function createOrm(mongoConnString: string, dbName = "metaplex") {
  const client = new MongoClient(mongoConnString);
  await client.connect();
  return client.db(dbName);
}
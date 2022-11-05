import { openDB } from "idb";

const TEST_DB_NAME = "test-db";
const TEST_DB_VERSION = 1;
const TEST_DB_STORE_NAME = "test-store";
const TEST_KEY = "2077";
export const getTestData = () => new Uint8Array(1024 * 1024 * 500);

export const LABEL_INSIDE_INDEXED_DB = "inside indexed db";

export async function testWrite(data: unknown) {
  const db = await openDB(TEST_DB_NAME, TEST_DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(TEST_DB_STORE_NAME);
    },
  });
  db.put(TEST_DB_STORE_NAME, data, TEST_KEY);
  db.close();
}

export async function testRead() {
  const db = await openDB(TEST_DB_NAME, TEST_DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(TEST_DB_STORE_NAME);
    },
  });
  const res = await db.get(TEST_DB_STORE_NAME, TEST_KEY);
  db.close();
  return res;
}

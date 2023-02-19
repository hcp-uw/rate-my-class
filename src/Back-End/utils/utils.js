import { ref, get, set} from "firebase/database";
import { database } from "./index.js";

// Returns all Data passed through the queryString
// @Params queryString - String of the Query
export async function getData(queryString) {
  const query = await ref(database, queryString);
  const qResult = await get(query);
  const data = qResult.val();
  return data;
}


export async function saveData(queryString, data) {
  const query = await ref(database, queryString);
  const qResult = await set(query,data);
  const result = qResult.val();
  return result;
}

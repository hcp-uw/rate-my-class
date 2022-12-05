import { ref, get} from "firebase/database";
import { database } from "./index.js";

// Returns all Data passed through the queryString
// @Params queryString - String of the Query
export async function getData(queryString) {
  const query = await ref(database, queryString);
  const qResult = await get(query);
  const data = qResult.val();
  return data;
}

// // Returns all Data passed through the queryString
// // @Params queryString - String of the Query
// export async function getSpecificData(queryString, attribute) {
//   fetch("https://rate-my-class-2652f-default-rtdb.firebaseio.com/Classes.json")
//       .then(statusCheck)
//       .then(resp => resp.text())
//       .then(getClasses)
//       .catch(handleError);
// }

// function getClasses(response) {
//   console.log(response);
// }

// async function statusCheck(res) {
//   if (!res.ok) {
//     throw new Error(await res.text());
//   }
//   return res;
// }
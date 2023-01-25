import { ref, get, set } from "firebase/database";
import { database } from "./index.js";

// Returns all Data passed through the queryString
// @Params queryString - String of the Query
export async function getData(queryString) {
  const query = await ref(database, queryString);
  const qResult = await get(query);
  const data = qResult.val();
  return data;
}

export async function writeData(star, userName, review, classID, hashedKey, isTest) {
  var test = "";
  if (isTest)  test = 'Test/'
  console.log("gere")
  set(ref(database, test + 'Classes/' + classID + '/Reviews/' + userName), {
    Rating: star,
    ReviewText: review,
    User: userName
  });
}
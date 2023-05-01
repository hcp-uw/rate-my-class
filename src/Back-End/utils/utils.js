import { ref, get, set, orderByChild } from "firebase/database";
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
  const now = new Date();
  if (isTest)  test = 'Test/'
  set(ref(database, test + 'Classes/' + classID + '/Reviews/' + hashedKey), {
    Rating: star,
    ReviewText: review,
    User: userName,
    Hash: hashedKey,
    Date: now.toISOString()
  });
}

// Returns all reviews for a class sorted by date
// @Params classID - ID of the class to get reviews for
export async function getReviewsSortedByDate(classID) {
  const query = await ref(database, 'Classes/' + classID + '/Reviews');
  const sortedQuery = orderByChild(query, 'Date');
  const qResult = await get(sortedQuery);
  const reviews = qResult.val();
  return reviews;
}

// import { getReviewsSortedByDate } from "./utils.js";

// // Example usage: get the reviews for class ID "abc" sorted by date
// getReviewsSortedByDate("abc")
//   .then((reviews) => {
//     console.log(reviews); // prints the sorted reviews to the console
//   })
//   .catch((error) => {
//     console.error(error);
//   });
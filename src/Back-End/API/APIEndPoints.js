import { getData } from "../utils/utils.js";
import { ref, orderByChild, get } from "firebase/database";

/* Returns data from a specified Class
   @Param Class - Specified Class Name
*/
export async function getClassData(Class,Test = "Classes/"){
    let data = await getData(Test + Class);
    return (data);
}

// get Devs endpoints
// @params: 
//      devs: dev's name
export async function getDevs(){
    let data = await getData("AboutUs/");
    return Array.from(Object.values(data));
}

// Returns all reviews for a class sorted by date
// @Params classID - ID of the class to get reviews for
export async function getReviewsSortedByDate(classID) {
    const query = await getData('Classes/' + classID + '/Reviews');
    const reviews = Array.from(Object.values(query))
    const sortedReviews = reviews.sort((a, b) => {
        const dateA = new Date(a.Date);
        const dateB = new Date(b.Date);
        return dateB - dateA; // Sort in descending order (most recent first)
    });
    return sortedReviews;
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
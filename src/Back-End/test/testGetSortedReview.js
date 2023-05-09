import {getReviewsSortedByDate} from "../API/APIEndPoints.js"
import {assert} from 'chai';

describe("Testing getReviewsSortedByDate Function", () => {
    it('Class Data',async () => {
      let reviews = await getReviewsSortedByDate("CSE142");
      reviews.forEach((review) => {
        console.log(`Review Text: ${review.ReviewText}`);
        console.log(`Date: ${review.Date}`);
      });
    })
})
import {getReviewsSortedByDate} from "../API/APIEndPoints.js"
import {assert} from 'chai';

describe("Testing getReviewsSortedByDate Function", () => {
    it('Review Sort',async () => {
      let reviews = await getReviewsSortedByDate("CSE142");
      let expected = [{
          Date: 'May 15, 2023',
          Hash: 1211993698323931,
          Rating: 4,
          ReviewText: 'Test',
          User: 'Leonardo Rudby Paredes Alfaro'
        },
        {
          Date: 'May 14, 2023',
          Hash: 4111424264421769,
          Rating: 3,
          ReviewText: 'This is super dope',
          User: 'Benjamin Carney'
        },
        {
          Date: 'May 10, 2023',
          Hash: 4866666744959625,
          Rating: 4,
          ReviewText: 'This is another test',
          User: 'Benjamin Carney'
        }];
      assert.deepEqual(reviews, expected);
    })
})
import {getCourseNames} from "../API/APIEndPoints.js"
import {assert} from 'chai';

const domain = 'https://rate-my-class-2652f-default-rtdb.firebaseio.com/'

// Test case for getCourseData
describe("Testing getAllNames Function", () => {
    it('Class Data',async () => {
      let rsp = await getCourseNames("Test/Classes/");
      console.log(rsp)
    })
})
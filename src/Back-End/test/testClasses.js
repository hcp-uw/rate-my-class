import {getAllCourses} from "../API/APIEndPoints.js"
import {assert} from 'chai';

const domain = 'https://rate-my-class-2652f-default-rtdb.firebaseio.com/'

// Test case for getCourseData
describe("Testing getCourseData Function", () => {
    it('Class Data',async () => {
      let rsp = await getAllCourses();
      // let expected = { Difficulty: 5, Reviews: { Review1: '' } };
      // assert.deepEqual(rsp, expected);
      console.log(rsp);

    })
})
import {getClassData, getCourseNames} from "../API/APIEndPoints.js"
import {assert} from 'chai';

const domain = 'https://rate-my-class-2652f-default-rtdb.firebaseio.com/'

// Test case for getCourseData
describe("Testing getCourseNames Function", () => {
    it('Class Data',async () => {
      let rsp = await getClassData("CSE142", "Test/Classes/");
      let expected = {
        Code: "CSE142",
        Credit: 4,
        Description: 'Test Description',
        Difficulty: 5,
        Name: "Test Name",
        Reviews: 
          { Review1: 
            { 
              Name: 'TestName', 
              Rating: 1, 
              ReviewText: 'TestText' 
            } 
          }
      }
      assert.deepEqual(rsp, expected);
    })
})
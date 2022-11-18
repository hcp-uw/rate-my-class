import {getClassData} from "../API/APIEndPoints.js"
import {assert} from 'chai';


describe("Testing getClassesData Function", () => {
    it('Class Data',async () => {
      let rsp = await getClassData("CSE142", "Test/Classes/");
      let expected = {
        Credit: 4,
        Description: 'Test Description',
        Difficulty: 5,
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
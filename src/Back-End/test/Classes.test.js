import {getCourses, getCourseData, getCourseNames} from "../API/APIEndPoints.js"
import {assert} from 'chai';

describe("getCourses", () => {
  it('Class Data',async () => {
    let rsp = await getCourses("Test/Classes/");
    let expected = {
      ARCH150: {
        Code: 'ARCH150',
        Credit: 4,
        Description: 'Test Description',
        Difficulty: 3,
        Name: 'Test Name',
        Reviews: {
          '4578446722340046': { 
            Rating: 4, 
            ReviewText: 'teststests', 
            User: 'cypresss' 
          },
          '8056059705440695': { 
            Rating: 0, 
            ReviewText: 'never gonnna give you up', 
            User: 'Rick' 
          }
        }
      },
      CSE142: {
        Code: 'CSE142',
        Credit: 4,
        Description: 'Test Description',
        Difficulty: 5,
        Name: 'Test Name',
        Reviews: { 
          Ben: { 
            Rating: 2, 
            ReviewText: 'nice', 
            User: 'Ben' 
          } 
        }
      },
      CSE143: {
        Code: 'CSE143',
        Credit: 4,
        Description: 'Test Description',
        Difficulty: 5,
        Name: 'Test Name',
        Reviews: {
          '3897689814430853': { 
            Rating: 0, 
            ReviewText: 'does someone read this?', 
            User: 'hello' 
          }
        }
      }
    };
    assert.deepEqual(rsp, expected);
  })
})

// Test case for getCourseData
describe("getCourseNames", () => {
    it('Class Data',async () => {
      let rsp = await getCourseNames("Test/Classes/");
      let expected = ["ARCH150", "CSE142", "CSE143"];
      assert.deepEqual(rsp, expected);
    })
})

describe("getCourseData", () => {
  it('Class Data',async () => {
    let rsp = await getCourseData("CSE142", "Test/Classes/");
    let expected = {
      Code: "CSE142",
      Credit: 4,
      Description: 'Test Description',
      Difficulty: 5,
      Name: "Test Name",
      Reviews: 
        { Ben: 
          { 
            Rating: 2,
            ReviewText: 'nice',
            User: 'Ben'
          } 
        }
    }
    assert.deepEqual(rsp, expected);
  })
})
import {getAllDevs} from "../API/APIEndPoints.js"
import {assert} from 'chai';

// Test case for getAllDevs
describe("Testing getAllDevs Function", () => {
    it('Devs Data',async () => {
      let rsp = await getAllDevs();
      console.log(rsp);
    })
})
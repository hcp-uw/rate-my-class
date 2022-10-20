import {getClassData} from "../API/APIEndPoints.js"
import {assert} from 'chai';


describe("Testing getClassesData Function", () => {
    it('Class Data',async () => {
      let rsp = await getClassData();
      console.log(rsp);
    })
})
import {getDevs} from "../API/APIEndPoints.js"
import {assert} from 'chai';


describe("Testing getDevs Function", () => {
    it('Devs Data',async () => {
      let rsp = await getDevs();
      console.log(rsp);
    })
})
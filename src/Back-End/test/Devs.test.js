import {getDev, getDevs} from "../API/APIEndPoints.js"
import {assert} from 'chai';

// Test case for getDevs
describe("getDevs", () => {
    it('Devs Data',async () => {
      let rsp = await getDevs();
      let expected = [
        {
          Fun_fact: 'I like banana peppers',
          Grade: 'Junior',
          Image: 'N/A',
          Major: 'Economics',
          Name: 'Ben',
          Role: 'Front-End/Back-end'
        },
        {
          Fun_fact: 'I once won a TV from lottery',
          Grade: 'Junior',
          Image: 'Cypress.jpg',
          Major: 'CS',
          Name: 'Cypress',
          Role: 'Back-end'
        },
        {
          Fun_fact: 'I have a cat named Mowmow',
          Grade: 'Sophomore',
          Image: 'N/A',
          Major: 'Informatics',
          Name: 'Katie',
          Role: 'Front-End'
        },
        {
          Fun_fact: 'I can kind of Juggle',
          Grade: 'Sophomore',
          Image: 'Leo.jpg',
          ImageUrl: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445',
          Major: 'Mathematics',
          Name: 'Leo',
          Role: 'Front-end'
        },
        {
          Fun_fact: 'Watch TLOU',
          Grade: 'Junior',
          Image: 'Tan.jpg',
          Major: 'CS',
          Name: 'Tan Nguyen',
          Role: 'Back End'
        }
      ]
      assert.deepEqual(rsp, expected);
    })
})

describe("getDev", () => {
  it('Devs Data',async () => {
    let rsp = await getDev("Tan");
    let expected = {
      Fun_fact: 'Watch TLOU',
      Grade: 'Junior',
      Image: 'Tan.jpg',
      Major: 'CS',
      Name: 'Tan Nguyen',
      Role: 'Back End'
    }
    assert.deepEqual(rsp, expected);
  })
})
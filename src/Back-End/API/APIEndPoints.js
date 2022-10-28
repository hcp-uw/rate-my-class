import { getData } from "../utils/utils.js";

/* Returns data from a specified Class
   @Param Class - Specified Class Name
*/
export async function getClassData(Class){
    let data = await getData("Classes/" + Class);
    return data;
}

// get Devs endpoints
// @params: 
//      devs: dev's name
export async function getDevs(devs){
    let data = await getData("People/" + devs);
    return data;
}
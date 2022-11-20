import { getData } from "../utils/utils.js";

/* Returns data from a specified Class
   @Param Class - Specified Class Name
*/
export async function getClassData(Test = "Classes/", Class){
    let data = await getData(Test + Class);
    return Array.from(Object.values(data));
}

// get Devs endpoints
// @params: 
//      devs: dev's name
export async function getDevs(){
    let data = await getData("People/");
    return Array.from(Object.values(data));
}
import { getData } from "../utils/utils.js";

/* Returns data from a specified Class
   @Param Class - Specified Class Name
*/
export async function getClassData(Class){
    let data = await getData("Classes/" + Class);
    return data;
}

// Gets Devs endpoints and returns data from a developer
// @params: 
//      devs: dev's name
export async function getDevs(){
    let data = await getData("People/");
    return data;
}
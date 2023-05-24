import { getData } from "../utils/utils.js";

/* Returns data from a specified Class
   @Param Class - Specified Class Name
*/
export async function getClassData(Class,Test = "Classes/"){
    let data = await getData(Test + Class);
    return (data);
}

// get Devs endpoints
// @params: 
//      devs: dev's name
export async function getDevs(){
    let data = await getData("AboutUs/");
    return Array.from(Object.values(data));
}

export async function getClasses(){
    let data = await getData("Classes/");
    return Array.from(Object.values(data));
}
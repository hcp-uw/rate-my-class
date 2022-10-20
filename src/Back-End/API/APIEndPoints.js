import { getData } from "../utils/utils.js";

/* Returns data from a specified Class
   @Param Class - Specified Class Name
*/
export async function getClassData(Class){
    let data = await getData("Classes/" + Class);
    return data;
}
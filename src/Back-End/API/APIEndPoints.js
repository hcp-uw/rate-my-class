import { getData } from "../utils/utils.js";

/* Returns data from a specified course
   @Param Class - Specified Class Name
*/
export async function getCourse(course){
    let data = await getData("Classes/" + course);
    return data;
}

/* Returns data from a specified dev
   @Param Class - Specified Class Name
*/
export async function getDev(dev){
    let data = await getData("People/" + dev);
    return data;
}

// Gets Devs endpoints and returns data from a developer
export async function getAllDevs(){
    let data = await getData("People/");
    return data;
}

// Returns data from all the classes
export async function getAllCourses(){
    let data = await getData("Classes/");
    return data;
}
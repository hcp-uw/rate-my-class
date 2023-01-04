import { getData } from "../utils/utils.js";
// import { getSpecificData } from "../utils/utils.js";


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
export async function getClassData(Class,Test = "Classes/"){
    let data = await getData(Test + Class);
    return (data);
}
export async function getDev(dev){
    let data = await getData("People/" + dev);
    return Array.from(data);
}

// get Devs endpoints
// @params: 
//      devs: dev's name
export async function getDevs(){
    let data = await getData("People/");
    return Array.from(Object.values(data));
}

export async function getCourseNames(Test = "Classes/"){
    let data = await getData(Test);
    let nData = Array.from(Object.values(data));
    let retData  = []
    nData.forEach((d) => {
        retData.push(d.Code)
    });

    return retData;
}
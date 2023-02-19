import { getData } from "../utils/utils.js";

export async function getCourses(Test = "Classes/"){
    let data = await getData(Test);
    return (data);
}

export async function getCourseData(Class, Test = "Classes/"){
    let data = await getData(Test + Class);
    return (data);
}

export async function getCourseNames(Test = "Classes/"){
    let data = await getData(Test);
    let nData = Array.from(Object.values(data));
    let result  = [];
    nData.forEach((d) => {
        result.push(d.Code);
    });

    return result;
}

export async function getDev(dev){
    let data = await getData("People/" + dev);
    return Array.from(data);
}

export async function getDevs(){
    let data = await getData("People/");
    return Array.from(Object.values(data));
}
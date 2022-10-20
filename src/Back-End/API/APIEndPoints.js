import { getData } from "../utils/utils.js";

export async function getClassData(test = "Classes"){
    let data = await getData(test);
    return data;
}
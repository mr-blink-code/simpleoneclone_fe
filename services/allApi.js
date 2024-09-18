import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";

export const viewCards =async()=> {
    return await commonApi('GET',`${serverURL}/card`)
}

export const viewVarient =async()=> {
    return await commonApi('GET',`${serverURL}/varient/`)
}

export const viewVarientbyId =async(id)=> {
    return await commonApi('GET',`${serverURL}/varient/${id}`)
}
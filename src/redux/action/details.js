import type from "../type"

export const DataInput = (data) => {
    return {
        type: type.User_Data,
        payload: data
    }
}
export const DeleteData = (userId)=> {
    return {
        type: type.Delete_Data,
        userId
    }
}
export const UpdateData = (data) => {
    // console.log(index)
    return {
        type: type.EDIT,
        payload: data,
    }
}
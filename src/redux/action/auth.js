import type from "../type"

export const Login1 = (data) => {
    return {
        type:type.LOGIN,
        payload:data
    }
}



export const Logout = () => {
    return {
        type:type.LOGOUT
    }
}


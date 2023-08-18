import { getLogin, removelogin, setLogin } from "../../utils/utils";
import type from "../type";

const initialState = {
    userdata: {}
}

const userState = (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN:
            {
                const data = action.payload
                console.log("data--------", data)
                setLogin(data)
                return {
                    userdata: data
                }

            }

        // case type.LOGIN: return state = true;
        case type.LOGOUT:
            removelogin()


            return {
                userdata: undefined
            }
        
          

        default: return state
    }
}

export default userState
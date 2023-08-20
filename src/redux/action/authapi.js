import { LOGIN, SIGNUP } from "../../constatnts/urls";
import { apipost } from "../../utils/utils";

export const LoginApi = (data, header) => {
    return new Promise((resolve, reject) => {
      apipost(LOGIN, data, header)
        .then((res) => {
          return resolve(res);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  export const SignupApi = ( data, header) => {
    return new Promise((resolve, reject) => {
        console.log(data,'datattata')
      apipost(SIGNUP, data, header)
        .then((res) => {
          return resolve(res);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };
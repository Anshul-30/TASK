import urls from "../../constatnts/urls";
import { apipost } from "../../utils/utils";

export const LoginApi = (data, header) => {
    return new Promise((resolve, reject) => {
      apipost(urls.LOGIN, data, header)
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
      apipost(urls.SIGNUP, data, header)
        .then((res) => {
          return resolve(res);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };
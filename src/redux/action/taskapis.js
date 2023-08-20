import { ADD, ALLTASK, DELETE, DELETEALL } from "../../constatnts/urls";
import { apiDelete, apiGet, apipost } from "../../utils/utils";

export const AllTask = (query,data={}, header) => {
    return new Promise((resolve, reject) => {
      apiGet(ALLTASK+query, data, header)
        .then((res) => {
          return resolve(res);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  export const DeleteTask = (query,data, header) => {
    return new Promise((resolve, reject) => {
      apiDelete(DELETE+query, data, header)
        .then((res) => {
          return resolve(res);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };
 
export const DeleteAllTasks = (query,data={}, header) => {
  console.log(query,'querry')
  return new Promise((resolve, reject) => {
    apiDelete(DELETEALL+query, data, header)
      .then((res) => {
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};
  export const AddNewTask = (data, header) => {
    console.log(data,'datataat')
    return new Promise((resolve, reject) => {
      apipost(ADD, data, header)
        .then((res) => {
          return resolve(res);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };
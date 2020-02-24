import React from "react";
/**
 * packages
 */
import Axios from "axios";
import { toast } from "react-toastify";
/**
 * utilities
 */
import Notify from "./Notify";

export default function Http({
  url,
  type = "get",
  data = {},
  application = "application/json"
}) {
  let response = null;
  const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 180000,
    headers: {
      Authorization: `Bearer ${
        localStorage["access_token"] ? localStorage["access_token"] : ""
      }`,
      "Content-Type": application,
      Accept: "application/json"
    }
  });

  switch (type) {
    case "get":
      response = axiosInstance.get(url, { params: data });
      break;
    case "post":
      response = axiosInstance.post(url, data);
      break;
    case "put":
      response = axiosInstance.put(url, data);
      break;
    case "delete":
      response = axiosInstance.delete(url, data);
      break;
    default:
      break;
  }

  if (response) {
    response.catch(error => {
      if (error.response) {
        if (error.response.status === 401) {
          delete localStorage["user"];
          delete localStorage["jwt"];
          window.location.reload();
        }
      } else {
        toast(<Notify body="A server error occured." type="error" />);
      }
    });
  } else {
  }

  return response;
}

import { Url } from "./routerInstances/AuthRoute";
import { getToken } from "../clients/authClient";
import axios from "axios";

export async function postData(url = "", data = {}) {
  axios
    .post(`${Url.Base}${url}`, data, {
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + getToken(),
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
}

export async function getData(url = "", params = {}) {
  const urlGet = new URL(`${Url.Base}${url}`);
  Object.keys(params).forEach((key) =>
    urlGet.searchParams.append(key, params[key])
  );

  const response = await fetch(urlGet, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
}

export async function putData(url = "", data = {}) {
  const response = await fetch(`${Url.Base}${url}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteData(url = "", params = {}) {
  const urlDelete = new URL(`${Url.Base}${url}`);
  Object.keys(params).forEach((key) =>
    urlDelete.searchParams.append(key, params[key])
  );

  const response = await fetch(urlDelete, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
}
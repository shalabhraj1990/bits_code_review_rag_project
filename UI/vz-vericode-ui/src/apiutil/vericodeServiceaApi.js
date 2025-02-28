import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://127.0.0.1:8000/vericodeservice/";

export function get_api(endpoint) {
  return fetch(baseUrl+endpoint).then(handleResponse).catch(handleError);
}

export function post_api(endpoint, data) {
  return fetch(baseUrl + endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function delete_api(endpoint,id) {
  return fetch(baseUrl + endpoint +'/'+ id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

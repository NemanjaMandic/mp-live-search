// @flow

import axios from "axios";

const defaultHeaders = {
  "content-type": "application/json",
  accept: "application/json"
};

class Network {
  service: Object;

  constructor() {
    const service = axios.create();
    service.defaults.headers = defaultHeaders;
    this.service = service;
  }

  get(path: String) {
    return this.service
      .get(path)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  // cancel() {
  //   return this.service.CancelToken.source();
  // }
  // other http methods here
}

export default new Network();

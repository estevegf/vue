import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.github.com/repos/vuejs`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getInfo() {
    return apiClient.get("/vue");
  }
};

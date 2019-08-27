import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://us-central1-tfg2019-ae3f8.cloudfunctions.net/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getInfo() {
    return apiClient.get("/education");
  }
};

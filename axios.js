import axios from "axios";

const instance = axios.create({
  baseURL: "https://juniorbee.pythonanywhere.com/api/v1/"
});

export default instance;

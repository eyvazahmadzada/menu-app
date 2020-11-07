import axios from "axios";

const instance = axios.create({
  baseURL: "http://juniorbee.pythonanywhere.com/api/v1/"
});

export default instance;

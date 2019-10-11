import axios from "axios";
const instance = axios.create({
	baseURL: "https://homework-portal.herokuapp.com/api"
});

export default instance;

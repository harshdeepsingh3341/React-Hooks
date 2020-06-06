import config from "../config/config";
import axios from 'axios';

export const getTodos = () =>
	axios({
		method: "GET",
		url: `${config.api_url}todos`
	})

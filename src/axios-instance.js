import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://advisr-project-727b7.firebaseio.com/',
});

export default instance;

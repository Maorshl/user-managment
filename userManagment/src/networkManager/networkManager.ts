import axios from 'axios';

const appAxios = axios.create({baseURL: 'https://randomuser.me/api'});

export default appAxios;

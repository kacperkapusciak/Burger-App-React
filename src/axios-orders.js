import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-react-6775d.firebaseio.com/'
});

export default instance;
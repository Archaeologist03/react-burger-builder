import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-a7675.firebaseio.com/',
})

export default instance;

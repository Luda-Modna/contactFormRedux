import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = () => axiosInstance.get('/posts');

export const getUsers = () => axiosInstance.get('/users');

// axios
//   .get('https://randomuser.me/api/?results=2')
//   .then(data => console.log(data.data))
//   .catch(e => console.log(e));

// const axiosInstance = axios.create({
//   baseURL: 'https://randomuser.me/api',
// });

// axiosInstance
//   .get('/?results=2')
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err));

// axiosInstance
//   .get('/?gender=female')
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err));

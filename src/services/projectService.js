import axios from 'axios';

<<<<<<< HEAD
const API = import.meta.VITE_API_URL || 'https://portifolio-demo.onrender.com/api/projects';
=======
const API = 'http://localhost:8080/api/projects';
>>>>>>> f2b41d72482c1015fe6a2d85c8943620633578ed

export const getAll = () => axios.get(API);

export const getById = (id) => axios.get(`${API}/${id}`);

export const create = (project) => axios.post(API, project);

export const update = (id, project) => axios.put(`${API}/${id}`, project);

export const remove = (id) => axios.delete(`${API}/${id}`);

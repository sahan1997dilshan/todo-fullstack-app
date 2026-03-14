import axios from "axios";

const API = "http://localhost:8083/tasks";

export const getTasks = () => axios.get(API);

export const createTask = (task) => axios.post(API, task);

export const completeTask = (id) => axios.put(`${API}/${id}/done`);
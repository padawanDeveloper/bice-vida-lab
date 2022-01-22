import axios from "./axios";

const fetchPlan = (id) => axios.get(id);

export { fetchPlan };

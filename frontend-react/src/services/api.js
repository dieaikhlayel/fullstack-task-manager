

// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
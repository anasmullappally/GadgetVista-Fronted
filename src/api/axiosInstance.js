import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Set your base URL here
    timeout: 10000, // Set a timeout for requests 
    headers: {
        'Content-Type': 'application/json', // Set default content type (optional)
    },
});

// Add a request interceptor to include the token in every request
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token'); // Retrieve the token from wherever it's stored
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;

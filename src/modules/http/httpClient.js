 
import axios from 'axios';

const httpClient = axios.create({
   baseURL:'http://localhost:8080/api/v1' 
});

export default httpClient;
import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 239f3cbc71e6e1e0d0a57f6f2f155867d3967e07ff09d91596be09a3c14b8659'
    }
});
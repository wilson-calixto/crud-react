import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3004',
    // baseURL: process.env.REACT_APP_API || 'http://localhost:8080',

});

const apiRoutes = {
    TESTE_DE_API: '/teste_de_api',
    PRODUCTS:'/products',
    CLIENTS:'/clients',
    STORE:'/store',
    CATEGORY:'/category',
    BRANDS:'/brands',

};

export { api, apiRoutes };

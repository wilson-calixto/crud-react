import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3002',
    // baseURL: process.env.REACT_APP_API || 'http://localhost:8080',

});

const apiRoutes = {
    TESTE_DE_API: '/teste_de_api',
    PRODUCTS:'/product',
    PRODUCTS2:'/product',
    RATING:'/rating',

    CLIENTS:'/clients',
    STORE:'/store',
    CATEGORIES:'/categories',
    BRANDS:'/brands',
    MATERIALS:'/materials',
    STYLES:'/styles',
    COLORS:'/color',

};

export { api, apiRoutes };

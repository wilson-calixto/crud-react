// import axios from './axios-config';

const isAuthenticated = () =>
    localStorage.getItem(process.env.REACT_APP_TOKEN_KEY) !== null;

const getToken = () => localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
const setToken = token =>
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
const setUserData = json =>
    localStorage.setItem(process.env.REACT_APP_USER_DATA, JSON.stringify(json));
const getUserData = () =>
    JSON.parse(localStorage.getItem(process.env.REACT_APP_USER_DATA));

const verifyCredentials = async user => {
    try {
        // let resp = await axios.post('/user/auth', user);
        // return resp.data.token;
    } catch (error) {
        throw error;
    }
};

const logout = () => {
    localStorage.removeItem(process.env.REACT_APP_USER_DATA);
    localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
};

const access = type => {
    switch (type) {
        case 'admin': {
            let permissions = {
                pages: [
                    '/',
                    '/dashboard',
                    '/register',
                    '/query',
                    '/production',
                    '/query-results',
                    '/maintenance',
                    '/models',
                    '/user-registration',
                ],
            };
            return permissions;
        }
        case 'default': {
            let permissions = {
                pages: ['/query', '/production', '/query-results'],
            };
            return permissions;
        }
        default:
            return {
                pages: [],
            };
    }
};

export {
    isAuthenticated,
    getToken,
    logout,
    access,
    setToken,
    getUserData,
    setUserData,
    verifyCredentials,
};

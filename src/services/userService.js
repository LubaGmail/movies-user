import http from './httpService';
import {apiUrl} from '../config.json';

const userApi = apiUrl + '/users';

//                  aka data
export function register (user) {
    // data: { username: "", password: "", name: "" },
    return http.post(userApi, {
        email: user.username,
        password: user.password,
        name: user.name    
    });
}




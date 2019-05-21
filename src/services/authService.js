import http from './httpService';
import {apiUrl} from '../config.json';

const authApi = apiUrl + '/auth';

//                   aka username
export function login (email, password) {
    return http.post(authApi, {email, password});
}




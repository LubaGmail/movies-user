import http from './httpService';
import {apiUrl} from '../config.json';

const moviesApi = apiUrl + '/movies';

function moviesUrl (id) {
    return `${moviesApi}/${id}`;
}

export function getMovies() {
    return http.get(moviesApi);
}

export function getMovie(id) {
    return http.get(moviesUrl(id));
}

export function saveMovie(movie) {
    if (movie._id) {
        const body = {...movie};
        delete body._id;
        return http.put(moviesUrl(movie._id), body);
    }

    return http.post(moviesApi, movie);
 }

export function deleteMovie(id) {
   return http.delete(moviesUrl(id));
}
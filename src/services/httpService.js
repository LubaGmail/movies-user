import Axios from 'axios';

Axios.interceptors.response.use(null, error => {
    const expectedError = error.response.status >= 400 && error.response.status < 500;
  
    if (!expectedError) {
      alert('Unexpected error');
    }   
      // pass control to te catch block
    return Promise.reject(error);
  })

  export default {
      get: Axios.get,
      post: Axios.post,
      put: Axios.put,
      patch: Axios.patch,
      delete: Axios.delete
  }
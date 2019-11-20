import axios from 'axios';

export default {
    /**
     * @param query
     * @returns {Promise<AxiosResponse<T>>}
     */
    search(query) {
      return axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
          'headers': {
              'x-rapidapi-host': API_HOST,
              'x-rapidapi-key': API_KEY,
          }
      });
    },
}

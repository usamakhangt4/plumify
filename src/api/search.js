import axios from 'axios';

export default {
    /**
     * @param query
     * @returns {Promise<AxiosResponse<T>>}
     */
    search(query) {
      return axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
          'headers': {
              'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
              'x-rapidapi-key': '744e513029mshf532c0e26d9658ep18c128jsnb0650ee50ab0',
          }
      });
    },
}

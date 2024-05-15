import { createStore } from 'vuex'
import searchService from '../api/search'

export default createStore({
  state: {
    isSearching: false,
    error: null,
    songsList: [],
    selectedSong: {},
  },
  mutations: {
    SET_SEARCHING(state, isSearching) {
      state.isSearching = isSearching;
    },
    SET_SONGS_LIST(state, songsList) {
      state.songsList = songsList;
    },
    SET_SELECTED_SONG(state, song) {
      state.selectedSong = song;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    async fetchSongsList({ commit }, searchString) {
      if(!searchString) return

      commit('SET_SEARCHING', true);
      commit('SET_ERROR', null);

      try {
        const response = await searchService.search(searchString);
        const searchedSongsList=response.data.data
        commit('SET_SONGS_LIST', searchedSongsList);
      } 
      catch (error) {
        console.error("Error:", error);
        commit('SET_ERROR', 'Failed to fetch songs.');
      } 
      finally {
        commit('SET_SEARCHING', false);
      }
    },
    selectSong({ commit }, song) {
      commit('SET_SELECTED_SONG', song);
    }
  },
  // getters: {
  //   songsList: state => state.songsList,
  //   selectedSong: state => state.selectedSong,
  //   isSearching: state => state.isSearching,
  //   error: state => state.error
  // }
});

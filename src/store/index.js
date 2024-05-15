import { createStore } from 'vuex'
import searchService from '../api/search'

export default createStore({
  state: {
    isSearching: false,
    songsList: [],
    selectedSong: {},
    currentSongTime:0
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
    SET_CURRENT_SONG_TIME(state,time){
      state.currentSongTime = time
    }
  },
  actions: {
    async fetchSongsList({ commit }, searchString) {
      if(!searchString) return

      commit('SET_SEARCHING', true);

      try {
        const response = await searchService.search(searchString);
        commit('SET_SONGS_LIST', response.data.data);
      } 
      catch (error) {
        console.error("Error:", error);
      } 
      finally {
        commit('SET_SEARCHING', false);
      }
    },
    selectSong({ commit }, song) {
      commit('SET_SELECTED_SONG', song);
    }
  },
 
});

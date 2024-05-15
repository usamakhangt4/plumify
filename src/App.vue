<script setup>
import "./assets/styles/index.scss";

import { computed } from "vue";
import { useStore } from "vuex";
import SearchSong from "./components/SearchSong.vue";
import NowPlaying from "./components/NowPlaying.vue";
import PlaybackControls from "./components/PlaybackControls.vue";
import SongControls from "./components/SongControls.vue";
import SongTiming from "./components/SongTiming.vue";
import SongsList from "./components/SongsList.vue";
import { isEmptyObject } from "./utils/helper";
import AppLoader from "./components/AppLoader.vue";

const store = useStore();
const songsList = computed(() => store.state.songsList);
const isSearching = computed(() => store.state.isSearching);
const selectedSong = computed(() => store.state.selectedSong);

const noData = computed(() => {
  return (
    isEmptyObject(selectedSong.value) &&
    songsList.value.length === 0 &&
    !isSearching.value
  );
});

const showPlayer = computed(() => {
  return !isEmptyObject(selectedSong.value) && !isSearching.value;
});

const showSongsList = computed(() => {
  return (
    isEmptyObject(selectedSong.value) &&
    !isSearching.value &&
    songsList.value.length > 0
  );
});

const handleSearch = async (searchString) => {
  await store.dispatch("fetchSongsList", searchString);
  isSearching.value = store.state.isSearching;
};
</script>


<template>
  <main class="main-container">
    <section class="card">
      <SearchSong :handleSearch="handleSearch" />

      <!-- start show loader on searching -->
      <section class="loader-container" v-show="isSearching">
        <AppLoader />
      </section>
      <!-- end show loader on searching -->

      <section v-show="showPlayer">
        <NowPlaying />
        <PlaybackControls />
        <SongTiming />
        <SongControls />
      </section>
      <SongsList v-show="showSongsList" />

      <!-- start no data state -->
      <article v-show="noData" class="no-songs-found">
        <h1>No Songs here, try searching</h1>
      </article>
      <!-- end no data state -->
    </section>
  </main>
</template>


<style lang="scss" scoped>
.main-container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.card {
  background-color: #000419;
  width: 204px;
  height: 388px;
  padding: 13px 14px 20px;
}

.no-songs-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 16px;
    color: #ffdf;
    font-weight: normal;
    text-align: center;
  }
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
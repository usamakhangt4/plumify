<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import SearchSong from "./components/SearchSong.vue";
import "./assets/styles/index.scss";
import NowPlaying from "./components/NowPlaying.vue";
import PlaybackControls from "./components/PlaybackControls.vue";
import SongControls from "./components/SongControls.vue";
import SongTiming from "./components/SongTiming.vue";
import SongsList from "./components/SongsList.vue";
import { isEmptyObject } from "./utils/helper";

const store = useStore();
const songsList = computed(() => store.state.songsList);
const isSearching = computed(() => store.state.isSearching);
const selectedSong = computed(() => store.state.selectedSong);

const noData = computed(() => {
  return (
    !selectedSong.value && songsList.value.length === 0 && !isSearching.value
  );
});

const showPlayer = computed(() => {
  // console.log("Selected Song:", selectedSong.value);
  // console.log("Is Searching:", isSearching.value);
  return !isEmptyObject(selectedSong.value) && !isSearching.value;
});

const showSongsList = computed(() => {
  // console.log("Selected Song is empty:", !selectedSong.value);
  // console.log("Is not searching:", !isSearching.value);
  // console.log("Songs List Length:", songsList.value.length);
  // console.log("No Data condition:", noData.value);
  return (
    (isEmptyObject(selectedSong.value) &&
      !isSearching.value &&
      songsList.value.length > 0) ||
    noData.value
  );
});

const handleSearch = async (searchString) => {
  await store.dispatch("fetchSongsList", searchString);
};
</script>


<template>
  <main class="main-container">
    <section class="card">
      <SearchSong :handleSearch="handleSearch" />
      <section v-show="showPlayer">
        <NowPlaying />
        <PlaybackControls />
        <SongTiming />
        <SongControls />
      </section>
      <SongsList v-show="showSongsList" />
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
</style>
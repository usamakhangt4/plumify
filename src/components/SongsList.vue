<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const songsList = computed(() => store.state.songsList);
const showList = computed(() => songsList.value.length > 0);

const handleSelectSong = (song) => {
  console.log(song);
  store.dispatch("selectSong", song);
};
</script>

<template>
  <section class="songs-list-container">
    <ul class="songsList" v-if="showList">
      <li
        v-for="song in songsList"
        :key="song.id"
        class="song"
        @click="handleSelectSong(song)"
      >
        <img :src="song.album.cover" alt="album cover" />
        <article>
          <h3>{{ song.title }}</h3>
          <h4>{{ song.artist.name }}</h4>
        </article>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.songs-list-container {
  display: grid;
  // height: 340px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}
.songsList {
  margin-top: 20px;

  list-style: none;
  padding: 0;
  li {
    padding: 5px 0;
    color: #ffdf;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(128, 128, 128, 0.335);
    }

    h3 {
      font-size: 11px;
      font-weight: 300;
      margin-bottom: 5px;
      color: #ffdf;
    }
    h4 {
      font-size: 9px;
      font-weight: 200;
      color: #ffdf;
    }
  }
}

.song {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
}
</style>
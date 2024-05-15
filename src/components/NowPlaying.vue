<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedSong = computed(() => store.state.selectedSong);
const showMarquee = computed(() => selectedSong.value?.title?.length > 60);
</script>

<template>
  <section class="now-playing">
    <h3 class="now-playing-text">Now Playing</h3>
    <section class="image-container">
      <img :src="selectedSong?.album?.cover" alt="cover" />
    </section>
    <!-- show marquee class if showMarquee -->
    <h1 class="song-title" :class="{ marquee: showMarquee }">
      <p>{{ selectedSong?.title }}</p>
    </h1>
    <h3 class="artist-name">{{ selectedSong?.artist?.name }}</h3>
  </section>
</template>

<style lang="scss" scoped>
.now-playing {
  color: #fff;
  display: grid;
  place-items: center;
  margin-top: 17px;

  .now-playing-text {
    font-size: 14px;
    margin-bottom: 11px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .image-container {
    font-size: 9px;
    text-align: center;
    height: 126px;
    width: 126px;
    background-color: #f4f4f4ae;
    margin-bottom: 14px;
  }

  .artist-name {
    font-size: 12px;
    font-weight: 200;
    margin-top: 10px;
  }

  .song-title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;

    p {
      font-size: 18px;
      text-align: center;
      font-weight: 300;
      text-transform: capitalize;
    }
  }

  .marquee p {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>


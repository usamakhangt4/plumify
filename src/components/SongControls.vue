<script setup>
import PreviousIcon from "../assets/icons/previous.svg";
import PauseIcon from "../assets/icons/pause.svg";
import NextIcon from "../assets/icons/next.svg";
</script>

<template>
  <section class="song-controls-container">
    <img :src="PreviousIcon" alt="previous song" />
    <span class="play-pause-btn"
      ><img :src="PauseIcon" alt="pause song"
    /></span>
    <img :src="NextIcon" alt="next song" />
  </section>
</template>

<style lang="scss" scoped>
.song-controls-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 31px;
}

.play-pause-btn {
  height: 38px;
  width: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: #3b32bc;
}
</style>
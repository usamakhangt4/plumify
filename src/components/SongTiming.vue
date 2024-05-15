<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { secondsToMinutes } from "../utils/helper";

const store = useStore();
const selectedSong = computed(() => store.state.selectedSong);
const songDuration = computed(() => {
  return secondsToMinutes(selectedSong.value.duration);
});
</script>

<template>
  <section class="song-timing">
    <p class="time">0:00</p>
    <p class="time">{{ songDuration }}</p>
  </section>
  <section class="slider-container">
    <input type="range" min="0" max="100" value="0" class="slider" />
  </section>
</template>

<style lang="scss" scoped>
.song-timing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 9px;
  margin-bottom: 7px;

  .time {
    font-weight: 300;
  }
}

.slider-container {
  position: relative;
  width: 100%;
}

.slider {
  position: absolute;
  width: 176px;
  height: 11px;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 11px;
    height: 11px;
    background: #3b32bc;
    border: 2px solid #3b32bc;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -4px;
    box-sizing: border-box;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: #cbcbcb;
    border-radius: 4px;
  }
}
</style>


<script setup>
import PreviousIcon from "../assets/icons/previous.svg";
import PauseIcon from "../assets/icons/pause.svg";
import NextIcon from "../assets/icons/next.svg";
import { onMounted, onUnmounted, ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedSong = computed(() => store.state.selectedSong);

let audio = null;
let timer = null;
const isSongPlaying = ref(false);

const toggleSongPlay = () => {
  isSongPlaying.value = !isSongPlaying.value;

  if (isSongPlaying.value) {
    // play song
    if (!audio) {
      audio = new Audio(selectedSong.value?.preview);
    }
    audio.play();
    timer = setInterval(() => {
      store.commit("SET_CURRENT_SONG_TIME", Math.floor(audio.currentTime));
    }, 1000);
  } else {
    // pause song
    if (audio) {
      audio.pause();
    }
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
};

const seekBackwards = () => {
  if (audio) {
    audio.currentTime -= 10;
  }
};

const seekForwards = () => {
  if (audio) {
    audio.currentTime += 10;
  }
};

onMounted(() => {
  toggleSongPlay();
});

onUnmounted(() => {
  if (audio) {
    audio.pause();
    audio = null;
  }
  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  store.commit("SET_CURRENT_SONG_TIME", 0);
});
</script>

<template>
  <section class="song-controls-container">
    <img :src="PreviousIcon" alt="seek backward" @click="seekBackwards" />
    <span
      class="play-pause-btn"
      :class="{ 'song-playing': isSongPlaying }"
      @click="toggleSongPlay"
    >
      <img :src="PauseIcon" alt="pause song" class="pause-icon" />
    </span>
    <img :src="NextIcon" alt="seek forward" @click="seekForwards" />
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
.song-playing {
  .pause-icon {
    animation: spin 2s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
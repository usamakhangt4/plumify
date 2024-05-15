<script setup>
import VolumeIcon from "../assets/icons/volume.svg";
import RepeatIcon from "../assets/icons/repeat.svg";
import SuffleIcon from "../assets/icons/shuffle.svg";
import AddIcon from "../assets/icons/add.svg";
</script>

<template>
  <section class="controls-container">
    <img :src="VolumeIcon" alt="volume control" />
    <img :src="RepeatIcon" alt="repeat song" />
    <img :src="SuffleIcon" alt="suffle song" />
    <img :src="AddIcon" alt="add song" />
  </section>
</template>

<style lang="scss" scoped>
.controls-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 9px;
}
</style>
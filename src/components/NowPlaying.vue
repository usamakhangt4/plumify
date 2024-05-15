<script setup>
</script>

<template>
  <section class="now-playing">
    <h3 class="now-playing-text">Now Playing</h3>
    <section class="image-container">
      <img src="../assets/images/defaultCover.png" alt="cover" />
    </section>
    <h1 class="song-title">Title of the Song</h1>
    <h3 class="artist-name">Artist Name</h3>
  </section>
</template>

<style lang="scss" scoped>
.now-playing {
  color: #fff;
  display: grid;
  place-items: center;
  margin-top: 17px;

  .now-playing-text {
    font-size: 9px;
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
    margin-bottom: 8px;
  }

  .song-title {
    font-size: 14px;
    font-weight: 300;
    text-transform: capitalize;
  }

  .artist-name {
    font-size: 9px;
    font-weight: 200;
  }
}
</style>


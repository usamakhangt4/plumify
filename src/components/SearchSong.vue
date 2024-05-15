<script setup>
import { ref } from "vue";
import SearchIcon from "../assets/icons/search.svg";

const searchString = ref("");

const props = defineProps(["handleSearch"]);

const { handleSearch } = props;
</script>

<template>
  <section class="search-container">
    <input
      type="text"
      placeholder="Search for a song"
      class="search-input"
      v-model="searchString"
      @keypress.enter="handleSearch(searchString)"
    />

    <img
      :src="SearchIcon"
      alt="search"
      class="search-icon"
      @click="handleSearch(searchString)"
    />
  </section>
</template>

<style lang="scss" scoped>
.search-container {
  position: relative;
  width: 176px;
  height: 24px;
  margin-inline: auto;
  border-radius: 12px;
}

.search-input {
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #000419;
  border: none;
  border-radius: inherit;
  padding: 12px;
  font-size: 9px;

  &:focus {
    border: 0;
    outline: 0;
  }
}

.search-icon {
  position: absolute;
  width: 14px;
  height: 14px;
  left: 152px;
  top: 5px;
  cursor: pointer;
}
</style>





<!-- /* Search Icon */ -->

<!-- position: absolute;
width: 14px;
height: 14px;
left: 152px;
top: 5px; -->


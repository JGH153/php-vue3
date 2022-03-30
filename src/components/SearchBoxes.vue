<script setup lang="ts">
import BaseCard from "./shared/BaseCard.vue";
import type { SearchBoxConfig } from "@/shared/SearchBoxConfig.interface";
import SearchBox from "./SearchBox.vue";
import searchIcon from "@/assets/helper-icons/search.png";
import BaseIcon from "./shared/BaseIcon.vue";

const searchBoxes: SearchBoxConfig[] = [
  {
    name: "Google",
    searchUrl: "https://www.google.no/search?q=",
  },
  {
    name: "Wikipedia Engelsk",
    searchUrl: "https://en.wikipedia.org/w/index.php?search=",
  },
  {
    name: "Wikipedia Norsk",
    searchUrl: "https://no.wikipedia.org/w/index.php?search=",
  },
  {
    name: "Ebay",
    searchUrl: "https://www.ebay.com/sch/i.html?_nkw=",
  },
  {
    name: "1881",
    searchUrl: "https://www.1881.no/?query=",
  },
  {
    name: "Youtube",
    searchUrl: "https://www.youtube.com/results?search_query=",
  },
  {
    name: "Yr",
    searchUrl: "https://www.yr.no/nb/s%C3%B8k?q=",
  },
  {
    name: "Finn",
    searchUrl: "https://www.finn.no/globalsearchlander?q=",
  },
  {
    name: "Engelsk -> norsk",
    searchUrl: "https://translate.google.com/?sl=en&tl=no&op=translate&text=",
  },
];
</script>

<template>
  <BaseCard>
    <template #header> <BaseIcon :iconUrl="searchIcon" /> Søk </template>
    <template #content>
      <div class="inputs-container">
        <SearchBox
          v-for="item in searchBoxes"
          :key="item.name"
          :name="item.name"
          :searchUrl="item.searchUrl"
        />
      </div>
    </template>
  </BaseCard>
</template>

<style>
.inputs-container {
  display: flex;
  flex-direction: column;
}
</style>

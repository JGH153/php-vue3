<script setup lang="ts">
/*
Two ways to import img:
import vgUrl from "@/assets/icons/vg.png";
const dagbladUrl = new URL("../assets/icons/dagbladet.png", import.meta.url).href;
Will be base64 encoded...
// https://vitejs.dev/guide/assets.html

*/
import vgUrl from "@/assets/icons/vg.png";
import dagbladetUrl from "@/assets/icons/dagbladet.png";
import aftenpostenUrl from "@/assets/icons/aftenposten.png";
import abcnyheterUrl from "@/assets/icons/abcnyheter.png";
import taUrl from "@/assets/icons/ta.png";
import nrkUrl from "@/assets/icons/nrk.png";
import adrressaUrl from "@/assets/icons/adrressa.png";
import innherredUrl from "@/assets/icons/innherred.png";
import ilevangerUrl from "@/assets/icons/ilevanger.png";
import dnUrl from "@/assets/icons/dn.png";
import e24Url from "@/assets/icons/e24.png";
import BaseCard from "./shared/BaseCard.vue";

interface NewsPage {
  url: string;
  img: string;
}

const newsPages: NewsPage[] = [
  {
    url: "https://vg.no",
    img: vgUrl,
  },
  {
    url: "https://dagbladet.no",
    img: dagbladetUrl,
  },
  {
    url: "https://aftenposten.no",
    img: aftenpostenUrl,
  },
  {
    url: "https://abcnyheter.no",
    img: abcnyheterUrl,
  },
  {
    url: "https://t-a.no",
    img: taUrl,
  },
  {
    url: "https://nrk.no",
    img: nrkUrl,
  },
  {
    url: "https://adressa.no",
    img: adrressaUrl,
  },
  {
    url: "https://Innherred.no",
    img: innherredUrl,
  },
  {
    url: "https://ilevanger.no",
    img: ilevangerUrl,
  },
  {
    url: "https://dn.no",
    img: dnUrl,
  },
  {
    url: "https://e24.no",
    img: e24Url,
  },
];
</script>

<template>
  <BaseCard>
    <template #header> Nettaviser </template>
    <template #content>
      <div class="newsIcons">
        <a v-for="item in newsPages" :key="item.url" :href="item.url">
          <img :src="item.img" class="newsIcon" />
        </a>
      </div>
    </template>
  </BaseCard>
</template>

<style>
.newsIcon {
  border-radius: 15px;
  width: 70px;
  height: 70px;
  margin: 3px 6px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
}

.newsIcon:hover {
  transform: scale(1.05);
}
.newsIcon:active {
  transform: scale(0.95);
}

.newsIcons {
  display: flex;
  flex-wrap: wrap;
  padding: 3px 0px;
}
</style>

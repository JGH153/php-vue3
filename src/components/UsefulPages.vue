<script setup lang="ts">
/*
Two ways to import img:
import vgUrl from "@/assets/icons/vg.png";
const dagbladUrl = new URL("../assets/icons/dagbladet.png", import.meta.url).href;
Will be base64 encoded...
// https://vitejs.dev/guide/assets.html

*/
import vgUrl from "@/assets/icons/vg.png";
import wherebyUrl from "@/assets/icons/whereby.png";
import nordeaUrl from "@/assets/icons/nordea.png";
import facebookUrl from "@/assets/icons/facebook.png";
import ebayUrl from "@/assets/icons/ebay.png";
import dnbUrl from "@/assets/icons/dnb.png";
import sasUrl from "@/assets/icons/sas.png";
import nordnettUrl from "@/assets/icons/nordnett.png";
import icloudUrl from "@/assets/icons/icloud.png";
// nordnett?
import BaseCard from "./shared/BaseCard.vue";
import BaseIcon from "./shared/BaseIcon.vue";
import pagesIcon from "@/assets/helper-icons/web.png";

interface UsefulPage {
  name: string;
  url: string;
  img: string;
}

const usefulPages: UsefulPage[] = [
  {
    name: "VG",
    url: "https://vg.no",
    img: vgUrl,
  },
  {
    name: "Hemb",
    url: "https://whereby.com/hemb",
    img: wherebyUrl,
  },
  {
    name: "Tor Arnulf",
    url: "https://whereby.com/tor.arnulf",
    img: wherebyUrl,
  },
  {
    name: "Nordea",
    url: "https://www.nordea.no/",
    img: nordeaUrl,
  },
  {
    name: "Facebook",
    url: "http://www.facebook.com/",
    img: facebookUrl,
  },
  {
    name: "Ebay",
    url: "http://www.ebay.com/",
    img: ebayUrl,
  },
  {
    name: "DNB",
    url: "http://www.dnb.com/",
    img: dnbUrl,
  },
  {
    name: "SAS",
    url: "http://www.sas.com/",
    img: sasUrl,
  },
  {
    name: "Nordnett",
    url: "https://www.nordnet.no/no",
    img: nordnettUrl,
  },
  {
    name: "iCloud",
    url: "https://www.icloud.com/photos/",
    img: icloudUrl,
  },
];
</script>

<template>
  <BaseCard>
    <template #header> <BaseIcon :iconUrl="pagesIcon" /> Andre sider </template>
    <template #content>
      <div class="pageIcons">
        <a v-for="item in usefulPages" :key="item.url" :href="item.url">
          <img :src="item.img" class="pageIcon" :title="item.name" />
          <br />
          {{ item.name }}
        </a>
      </div>
    </template>
  </BaseCard>
</template>

<style>
.pageIcon {
  border-radius: 15px;
  width: 70px;
  height: 70px;
  margin: 3px 6px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
}

.pageIcon:hover {
  transform: scale(1.05);
}
.pageIcon:active {
  transform: scale(0.95);
}

.pageIcons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3px 0px;
  text-align: center;
}
</style>

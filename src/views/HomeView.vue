<script setup lang="ts">
//  TODO solve https://vitejs.dev/guide/assets.html
import vgUrl from "@/assets/icons/vg.png";
interface NewsPage {
  url: string;
  img: string;
}

// console.log(new URL(`"../assets/icons/vg.png`, import.meta.url).href);

const newsPages: NewsPage[] = [
  {
    url: "https://vg.no",
    img: vgUrl,
  },
  {
    url: "https://vuejs.org",
    img: "logo.svg",
  },
  {
    url: "https://dagbladet.no",
    img: "dagbladet.png",
  },
  {
    url: "https://aftenposten.no",
    img: "aftenposten.png",
  },
  {
    url: "https://abcnyheter.no",
    img: "abcnyheter.png",
  },
  {
    url: "https://t-a.no",
    img: "ta.png",
  },
  {
    url: "https://nrk.no",
    img: "nrk.png",
  },
  {
    url: "https://adressa.no",
    img: "adrressa.png",
  },
  {
    url: "https://Innherred.no",
    img: "Innherred.png",
  },
  {
    url: "https://ilevanger.no",
    img: "ilevanger.png",
  },
  {
    url: "https://dn.no",
    img: "dn.png",
  },
  {
    url: "https://e24.no",
    img: "e24.png",
  },
];
</script>

<!-- Use grid layout? Two each side on wide, one on small? -->
<!-- Elements: new icons, search, apps, currency, live weather -->
<!-- Use card -->

<template>
  <main>
    <h1>Hemb's Startside</h1>

    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <!-- Will not move to assets folder on build -->
    <img
      src="@/assets/icons/vg.png"
      class="newsIcon"
      width="125"
      height="125"
    />

    <!-- Will not work with @ in :src as opposed to src -->
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="'@/assets/logo.svg'"
      width="125"
      height="125"
    /> -->

    <div class="card m-2">
      <div class="card-body">
        <h5 class="card-title">Nettaviser</h5>
        <div class="newsIcons">
          <a v-for="item in newsPages" :key="item.url" :href="item.url">
            <img :src="'./src/assets/icons/' + item.img" class="newsIcon" />
            <img :src="'@/assets/icons/' + item.img" class="newsIcon" />
          </a>
        </div>
      </div>
    </div>

    <h2>Nettaviser</h2>

    <button type="button" class="btn btn-primary">Primary</button>
  </main>
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

<script setup lang="ts">
interface NewsPage {
  url: string;
  img: string;
}

const newsPages: NewsPage[] = [
  {
    url: "https://vg.no",
    img: "vg.png",
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

    <div class="card m-2">
      <div class="card-body">
        <h5 class="card-title">Nettaviser</h5>
        <div class="newsIcons">
          <a v-for="item in newsPages" :key="item.url" :href="item.url">
            <img :src="'./src/assets/icons/' + item.img" class="newsIcon" />
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

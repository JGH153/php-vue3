<script setup lang="ts">
import ExchangeRates from "../components/ExchangeRates.vue";
import NewsIcons from "../components/NewsIcons.vue";
import SearchBoxes from "../components/SearchBoxes.vue";
import PowerPrices from "../components/PowerPrices.vue";
import UsefulPages from "../components/UsefulPages.vue";
import Weather from "../components/Weather.vue";

// onMounted(async () => {});
</script>

<!-- Use grid layout? Two each side on wide, one on small? -->
<!-- Elements: new icons, search, apps, currency, live weather -->
<!-- Use card -->

<template>
  <main>
    <h1 class="center">Hemb's Startside</h1>

    <NewsIcons />
    <UsefulPages />
    <div class="cards-container">
      <SearchBoxes />
      <ExchangeRates />
      <PowerPrices />
      <Weather />
    </div>

    <!-- <h2>Nyttige programmer</h2>
    <h2>Aksjepriser (equinor og brent)</h2>
    <h2>Local loader for cards? with sceleton?</h2> -->
  </main>
</template>

<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.center {
  text-align: center;
}
</style>

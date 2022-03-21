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
    <h1>Hemb's Startside</h1>

    <div class="cards-container">
      <NewsIcons />
      <SearchBoxes />
      <ExchangeRates />
      <PowerPrices />
      <UsefulPages />
      <Weather />
    </div>

    <h2>Vær</h2>
    <!-- Elgveien 28> https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=63.6997&lon=11.1759 -->
    <!-- Vestre haugen 42> https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.9488&lon=10.8979 -->
    59.948839, 10.897921
    <h2>Nyttige programmer</h2>
    <h2>Aksjepriser (equinor og brent)</h2>
    <h2>Translate</h2>
  </main>
</template>

<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
}
</style>

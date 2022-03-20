<script setup lang="ts">
import ExchangeRates from "../components/ExchangeRates.vue";
import NewsIcons from "../components/NewsIcons.vue";
import SearchBoxes from "../components/SearchBoxes.vue";
import PowerPrices from "../components/PowerPrices.vue";

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
    </div>

    <h2>Nyttige sider</h2>
    <h2>Valutakurser</h2>
    <h2>Vær</h2>
    <h2>Nyttige programmer</h2>
    <h2>Wherewby rooms</h2>
    <h2>Aksjepriser (equinor og brent)</h2>
    <h2>Translate</h2>
    <h2>
      Strømprier? https://mm.aftenposten.no/io/elpriser/spotpriser_latest.json
    </h2>
  </main>
</template>

<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
}
</style>

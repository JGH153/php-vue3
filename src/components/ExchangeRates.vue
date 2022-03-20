<script setup lang="ts">
import { onMounted, ref } from "vue";
import BaseCard from "./shared/BaseCard.vue";
import EURUrl from "@/assets/flags/EUR.png";
import SekUrl from "@/assets/flags/SEK.png";
import GBPUrl from "@/assets/flags/GBP.png";
import USDUrl from "@/assets/flags/USD.png";
import DKKUrl from "@/assets/flags/DKK.jpeg";

interface ExchangeRate {
  name: string;
  value: number;
  multiply: number;
  imgUrl: string;
}

const currenciesToFlag = new Map<string, string>();
currenciesToFlag.set("EUR", EURUrl);
currenciesToFlag.set("SEK", SekUrl);
currenciesToFlag.set("GBP", GBPUrl);
currenciesToFlag.set("USD", USDUrl);
currenciesToFlag.set("DKK", DKKUrl);

const exchangeRates = ref<ExchangeRate[]>([]);

const loadRates = async () => {
  const response = await fetch(
    "https://data.norges-bank.no/api/data/EXR?lastNObservations=1"
  );
  const responseText = await response.text();

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(responseText, "text/xml");

  const seriesTags = Array.prototype.slice.call(
    xmlDoc.getElementsByTagNameNS("*", "Series")
  );
  const wantedCurrencies = ["USD", "SEK", "DKK", "GBP", "EUR"];

  const filteredSeries = seriesTags.filter(
    (current) =>
      wantedCurrencies.includes(current.getAttribute("BASE_CUR")) &&
      current.getAttribute("FREQ") == "B"
  );

  const rates = filteredSeries.map((current) => ({
    name: current.getAttribute("BASE_CUR"),
    value: current.childNodes[0].getAttribute("OBS_VALUE"),
    multiply: current.getAttribute("UNIT_MULT"),
    imgUrl: currenciesToFlag.get(current.getAttribute("BASE_CUR")) ?? "ERROR",
  }));

  exchangeRates.value = rates;
};
loadRates();
</script>

<template>
  <BaseCard>
    <template #header> Valutakurser </template>
    <template #content>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Flag</th>
            <th scope="col">Navn</th>
            <th scope="col">Verdi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of exchangeRates" :key="item.name">
            <th scope="row"><img :src="item.imgUrl" class="exchangeImg" /></th>
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </template></BaseCard
  >
</template>

<style>
.exchangeImg {
  width: 40px;
  height: 25px;
}
</style>

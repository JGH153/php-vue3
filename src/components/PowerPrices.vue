<script setup lang="ts">
import { ref } from "vue";
import BaseCard from "./shared/BaseCard.vue";

interface PowerPrice {
  valueOslo: number;
  valueTrondheim: number;
  dateTime: Date;
  timeString: string;
}

const getTimeString = (date: Date) => {
  return date.toLocaleString("no-NO", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const powerPrices = ref<PowerPrice[]>([]);
const powerPriceMap = new Map<string, PowerPrice>(); // from date is key

// using aftenposten API, should get better source
const loadPowerPrice = async () => {
  const response = await fetch(
    "https://mm.aftenposten.no/io/elpriser/spotpriser_latest.json"
  );
  const responseJson = await response.json();
  console.log("HomePage mounted", responseJson);

  const osloPriceList = responseJson.find(
    (current: any) => current.city === "Oslo"
  ).prices;

  osloPriceList
    // remove expired prices
    .filter((current: any) => new Date(current.from) >= new Date())
    .forEach((current: any) => {
      powerPriceMap.set(current.from, {
        dateTime: new Date(current.from),
        timeString: getTimeString(new Date(current.from)),
        valueOslo: current.prisKwh,
        valueTrondheim: 0,
      });
    });

  // TODO trondheim prices

  powerPrices.value = Array.from(powerPriceMap.values());

  console.log("osloPriceList", powerPriceMap);
};
loadPowerPrice();
</script>

<template>
  <BaseCard>
    <template #header> Strømpriser </template>
    <template #content>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Tid</th>
            <th scope="col">Pris Oslo</th>
            <th scope="col">Pris Trondhjem</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of powerPrices" :key="item.dateTime.toISOString()">
            <th scope="row">{{ item.timeString }}</th>
            <td>{{ item.valueOslo }}</td>
            <td>{{ item.valueTrondheim }}</td>
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
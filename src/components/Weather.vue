async
<script setup lang="ts">
import { globalLoadingWrapper } from "@/shared/loadingHelpers";
import { onMounted, ref } from "vue";
import BaseCard from "./shared/BaseCard.vue";
import weatherIcon from "@/assets/helper-icons/cloudy.png";
import BaseIcon from "./shared/BaseIcon.vue";

interface WeatherData {
  air_pressure_at_sea_level: number;
  air_temperature: number;
  cloud_area_fraction: number;
  relative_humidity: number;
  wind_from_direction: number;
  wind_speed: number;
  name: string;
  precipitation: number;
}

const weatherData = ref<WeatherData[]>([]);

const loadWeather = async (
  lat: number,
  log: number,
  name: string
): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${log}`
  );
  const responseJson = await response.json();
  const nextTimeseries = responseJson.properties.timeseries.find(
    (current: any) => new Date(current.time) >= new Date()
  );
  if (!nextTimeseries) {
    alert("Kan ikke laste vær!");
  }
  return {
    ...nextTimeseries.data.instant.details,
    name: name,
    precipitation:
      nextTimeseries.data.next_1_hours.details.precipitation_amount,
  };
};

onMounted(async () => {
  globalLoadingWrapper(async () => {
    weatherData.value.push(await loadWeather(63.6997, 11.1759, "Skogn"));
    weatherData.value.push(await loadWeather(59.9488, 10.8979, "Oslo"));
  });
});
</script>

<template>
  <BaseCard>
    <template #header>
      <BaseIcon :iconUrl="weatherIcon" /> Været akkurat nå
    </template>
    <template #content>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sted</th>
            <th scope="col">Tempratur</th>
            <th scope="col">Regn</th>
            <th scope="col">Vinn</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of weatherData" :key="item.name">
            <th scope="row">{{ item.name }}</th>
            <td>{{ item.air_temperature }}</td>
            <td>{{ item.precipitation }}</td>
            <td>{{ item.wind_speed }}</td>
          </tr>
        </tbody>
      </table></template
    ></BaseCard
  >
</template>

<style>
.exchangeImg {
  width: 40px;
  height: 25px;
}
</style>

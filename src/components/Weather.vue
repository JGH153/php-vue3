<script setup lang="ts">
import { onMounted, ref } from "vue";
import BaseCard from "./shared/BaseCard.vue";

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

const weatherData = ref<WeatherData>();

const loadWeather = async (
  lat: number,
  log: number,
  name: string
): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${log}`
  );
  const responseJson = await response.json();
  return {
    ...responseJson.properties.timeseries[0].data.instant.details,
    name: name,
    precipitation:
      responseJson.properties.timeseries[0].data.next_1_hours.details
        .precipitation_amount,
  };
};

onMounted(async () => {
  weatherData.value = await loadWeather(63.6997, 11.1759, "skogn");
});
</script>

<template>
  <BaseCard>
    <template #header> Været akkurat nå </template>
    <template #content> {{ weatherData }} </template></BaseCard
  >
</template>

<style>
.exchangeImg {
  width: 40px;
  height: 25px;
}
</style>

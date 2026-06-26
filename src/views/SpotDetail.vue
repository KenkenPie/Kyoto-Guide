<script setup>
import { useRoute } from "vue-router";
import { areas } from "../data/kyotoData";

const route = useRoute();

const area = areas.find(function (a) {
  return a.id === route.params.area;
});

const spot = area.spots.find(function (s) {
  return s.id === route.params.id;
});
</script>

<template>
  <div v-if="spot" class="detail-page">
    <div class="detail-card">
      <RouterLink :to="`/areas/${area.id}`" class="back-link">← 回{{ area.name }}</RouterLink>

      <h1>{{ spot.name }}</h1>
      <div class="img-list">
        <img
          v-for="img in spot.imgs"
          :key="img"
          :src="img"
          :alt="spot.name"
          class="spot-img"
        />
      </div>
      <p>分類：{{ spot.type }}</p>
      <p>{{ spot.description }}</p>
    </div>
  </div>

  <div v-else>
    <h1>找不到景點</h1>
    <RouterLink to="/areas">回地區列表</RouterLink>
  </div>
</template>

<style scoped>
.detail-page {
  width: min(92%, 1000px);
  margin: 48px auto;
}
.back-link {
  display: inline-block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #4f6f52;
}

.detail-card {
  background-color: #fffaf3;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.detail-card h1 {
  margin-bottom: 20px;
}

.img-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 24px auto;
}

.spot-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 18px;
  object-fit: cover;
}

.spot-type {
  font-weight: bold;
  color: #7a5c3e;
}

.spot-description {
  line-height: 1.8;
}

.back-link {
  text-decoration: none;
  color: #6b5b53;
  font-weight: bold;
}

.back-link:hover {
  color: #2f4f44;
}
</style>

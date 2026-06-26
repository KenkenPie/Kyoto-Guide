<script setup>
import { areas } from "../data/kyotoData";
</script>

<template>
  <div class="page">
    <h1>京都市區推薦地點(๑¯◡¯๑)</h1>

    <div v-for="area in areas" :key="area.id" class="area-card">
      <p v-if="area.isRecommended" class="badge">特別推薦★★★</p>
      <h2>{{ area.name }}</h2>

      <p>{{ area.description }}</p>

      <RouterLink :to="`/areas/${area.id}`"> 查看更多 </RouterLink>

      <hr />
    </div>
  </div>
</template>
<style scoped>
.page {
  width: min(88%, 720px);
  margin: 48px auto;
}

.area-card {
  border: 2px solid #4f6b5a;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
  background-color: #f8f3eb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.area-card h2 {
  color: #2f4f44;
}

.area-card p {
  color: #5f5a54;
  line-height: 1.8;
}

.area-card a {
  text-decoration: none;
  color: #b14d2a;
  font-weight: bold;
}

.badge {
  display: inline-block;
  background-color: #dce7df;
  color: #2f4f44;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 15px;
}


</style>

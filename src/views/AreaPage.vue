<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { areas } from "../data/kyotoData";

const route = useRoute();

const area = computed(function () {
  return areas.find(function (a) {
    return a.id === route.params.area;
  });
});

const filteredSpots = computed(function () {
  const filterType = route.query.type;

  if (!area.value) {
    return [];
  }

  if (!filterType) {
    return area.value.spots;
  }

  return area.value.spots.filter(function (spot) {
    return spot.type === filterType;
  });
});
</script>

<template>
  <div v-if="area" class="page">
    <RouterLink to="/areas" class="back-link">← 回京都地區列表</RouterLink>

    <h1>{{ area.name }}</h1>
    <p>{{ area.description }}</p>
    <RouterLink
      :to="`/areas/${area.id}`"
      class="filter-btn"
      :class="{ active: !route.query.type }"
    >
      全部
    </RouterLink>

    <RouterLink
      :to="`/areas/${area.id}?type=景點`"
      class="filter-btn"
      :class="{ active: route.query.type === '景點' }"
    >
      景點
    </RouterLink>

    <RouterLink
      :to="`/areas/${area.id}?type=美食`"
      class="filter-btn"
      :class="{ active: route.query.type === '美食' }"
    >
      美食
    </RouterLink>

    <RouterLink
      :to="`/areas/${area.id}?type=活動`"
      class="filter-btn"
      :class="{ active: route.query.type === '活動' }"
    >
      活動
    </RouterLink>
    <p>
      目前篩選：
      {{ route.query.type || "全部" }}
    </p>
    <hr />

    <div v-if="filteredSpots.length > 0">
      <div class="spot-list">
        <div v-for="spot in filteredSpots" :key="spot.id" class="spot-card">
          <img :src="spot.imgs[0]" :alt="spot.name" class="card-img" />
          <h2>{{ spot.name }}</h2>
          <p>分類：{{ spot.type }}</p>

          <RouterLink :to="`/areas/${area.id}/spots/${spot.id}`">
            查看詳細資料
          </RouterLink>

          <hr />
        </div>
      </div>
    </div>
    <div v-else>
      <p>這個分類目前沒有資料。</p>
    </div>
  </div>

  <div v-else>
    <h1>找不到這個區域</h1>
    <RouterLink to="/areas">回地區列表</RouterLink>
  </div>
</template>

<style scoped>
.page {
  width: min(95%, 1200px);
  margin: 48px auto;
}
.filter-btn {
  margin-right: 10px;
  text-decoration: none;
  color: #8b4b3e;
  font-weight: bold;
}

.active {
  color: #fffaf3;
  background-color: #4f6b5a;
  padding: 6px 12px;
  border-radius: 999px;
}

.spot-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
}

.spot-card {
  width: 420px;
  border: 2px solid #4f6b5a;
  border-radius: 20px;
  padding: 20px;
  background-color: #f8f3eb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.spot-card h2 {
  color: #2f4f44;
}

.spot-card p {
  color: #5f5a54;
  line-height: 1.7;
}

.spot-card a {
  text-decoration: none;
  color: #8b4b3e;
  font-weight: bold;
}

.spot-card a:hover {
  color: #b35c44;
}
.card-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 16px;
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

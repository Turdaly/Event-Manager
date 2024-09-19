<template>
  <NuxtLoadingIndicator />
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Event Manager",
  description:
    "Платформа для управления событиями, планирования мероприятий и отслеживания задач.",
  ogTitle: "Event Manager - Управление Событиями",
  ogDescription:
    "Оптимальное решение для управления вашими событиями и мероприятиями. Все необходимые инструменты для планирования, организации и отслеживания.",
  ogImage:
    "https://www.patrik.ru/wp-content/uploads/2024/03/kurumsal-web-tasarim.png",
  ogImageAlt: "Event Manager - Управление Событиями",
  twitterDescription:
    "Платформа для управления событиями с удобным интерфейсом и функциями для планирования.",
  author: "Yelnur",
  creator: "Yelnur",
});
const auth = useAuth();

onMounted(() => {
  const userInLocalStorage = localStorage.getItem("user");
  if (userInLocalStorage) {
    auth.user = JSON.parse(userInLocalStorage);
  }
});
watch(
  () => auth.user,
  (state) => {
    localStorage.setItem("user", JSON.stringify(state));
  },
  { deep: true }
);
</script>

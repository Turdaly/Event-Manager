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
const auth = useAuth()
const onCreated = () => {
  const token = useCookie("token");
  const clientId = useCookie("clientId");
  if (auth.user.id === null && clientId.value) auth.user.id = clientId.value;
  if (token.value) {
    const decoded = decodeJwt(token.value);
    if (decoded) {
      auth.user.name = decoded.name;
      auth.user.email = decoded.email;
      auth.user.picture = decoded.picture;
      auth.user.given_name = decoded.given_name;
    }
  }
};
onCreated();
</script>

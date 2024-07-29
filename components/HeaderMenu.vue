<template>
  <div class="t-w-full t-p-2 t-bg-primary">
    <ul class="t-flex t-justify-center">
      <li
        v-for="(item, index) in headerItems"
        :key="index"
        class="t-p-2 hover:t-bg-hover t-transition-colors"
      >
        <NuxtLink :to="{ name: item.link }">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const headerItems: Types.Template.HeaderItem[] = [
  { title: "Create Event", link: "events" },
  { title: "My Events", link: "my-events" },
  { title: "Calendar", link: "my-events-calendar" },
];
</script>

<template>
  <div
    class="t-flex t-flex-col sm:t-flex-row t-gap-4 t-p-5 t-border t-border-gray-300 t-rounded-lg hover:-t-translate-y-1 t-transition-transform"
  >
    <div>
      <img :src="item.img" :alt="item.title" class="t-w-[calc(100% - 10px)] sm:t-max-w-[160px]" />
    </div>
    <div class="t-flex t-flex-col t-justify-between">
      <div>
        <h3 class="t-text-lg t-font-medium t-mb-2">{{ item.title }}</h3>
        <p class="t-text-sm">{{ item.paragraph }}</p>
      </div>
      <NuxtLink :to="{ name: item.link}">
        <div
          color="#5271ff"
          variant="outlined"
          class="align-self-end t-mt-4 t-p-2 t-text-center t-font-medium sm:t-w-[calc(50%-10px)] t-rounded-lg t-borded-1 t-border-2 t-text-[#5271ff] t-border-[#5271ff]"
        >
          {{ item.textButton }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ item: Types.Template.BodyItem }>();
</script>

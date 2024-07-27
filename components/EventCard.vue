<template>
  <div class="t-flex t-gap-4 t-p-5 t-border t-border-gray-300 t-rounded-lg hover:-t-translate-y-1 t-transition-transform">
    <div>
      <img :src="item.img" :alt="item.title" class="t-max-w-[160px]" />
    </div>
    <div class="t-flex t-flex-col t-justify-between">
      <div>
        <h3 class="t-text-lg t-font-medium t-mb-2">{{ item.title }}</h3>
        <p class="t-text-sm">{{ item.paragraph }}</p>
      </div>
      <v-btn color="#5271ff" variant="outlined" class="align-self-end t-mt-4 text-capitalize">
        {{ item.textButton }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">


const props = defineProps<{ item: Types.Template.BodyItem }>();
</script>

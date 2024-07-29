<template>
  <div class="t-h-screen t-flex t-items-center t-justify-center t-bg-primary">
    <v-card
      class="mx-auto"
      color="#ffff"
      elevation="16"
      width="450"
      height="200"
    >
      <template v-slot:title>
        <span class="font-weight-black t-text-3xl">404</span>
      </template>

      <v-card-text>
        <p class="t-text-lg">The page was not found.</p>
      </v-card-text>
      <div>
        <v-card-text class="t-mt-8">
          <NuxtLink to="/" class="t-text-accent t-text-lg"
            ><Icon
              name="dashicons:arrow-left-alt"
              class="t-translate-y-0.5 t-mr-1"
            ></Icon
            >Go back home</NuxtLink
          >
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useError } from "nuxt/app";

const error = useError();
</script>

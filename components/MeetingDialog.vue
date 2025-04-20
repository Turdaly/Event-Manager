<template>
  <v-dialog max-width="500" v-model="isActive" v-if="meeting">
    <template v-slot:activator="{ props: activatorProps }">
      <p v-bind="activatorProps" @click="openDialog">Смотреть</p>
    </template>
    <template v-slot:default>
      <v-card>
        <!-- Icon at the top center -->
        <v-img
          src="/logo.png"
          :width="200"
          aspect-ratio="16/9"
          cover
          class="t-mx-auto t-mt-4"
        ></v-img>

        <v-card-title class="t-text-center">Подробности Встречи</v-card-title>

        <v-card-text>
          <p class="text-subtitle-1">
            Название Встречи:
            <span class="t-text-accent">{{ meeting.title }}</span>
          </p>
          <p>
            Дата и Время Начала:
            <span class="t-text-accent"
              >{{ meeting.startDate }} {{ meeting.startTime }}</span
            >
          </p>
          <p>
            URL-Адрес Собрания:
            <NuxtLink
              :to="meeting.link_address"
              target="_blank"
              rel="noopener"
              class="t-text-accent"
              >{{ meeting.link_address }}</NuxtLink
            >
          </p>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

defineProps<{
  meeting: Types.Event.MyEvent;
}>();

const isActive = ref(false);

const openDialog = () => {
  isActive.value = true;
};
</script>

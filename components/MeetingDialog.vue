<template>
  <v-dialog max-width="500" v-model="isActive">
    <template v-slot:activator="{ props: activatorProps }">
      <p v-bind="activatorProps" @click="openDialog">View</p>
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

        <v-card-title class="t-text-center">Meeting Details</v-card-title>

        <v-card-text>
          <p class="text-subtitle-1">
            Meeting Title: <span class="t-text-accent">{{ meeting.title }}</span>
          </p>
          <p>
            Start Date & Time:
            <span class="t-text-accent">{{ meeting.startDateTime }}</span>
          </p>
          <p>Invited Participants:</p>
          <p>
            Meeting URL:
            <a :href="meeting.link" target="_blank">{{ meeting.link }}</a>
          </p>
        </v-card-text>

        <div class="t-flex t-justify-between t-p-6">
          <v-btn color="#5271ff" variant="outlined">Add To Google Calendar</v-btn>

          <v-btn
            text="Open Meeting"
            color="#5271ff"
            :href="meeting.link"
            target="_blank"
          ></v-btn>
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue';

const props = defineProps<{
  meeting: {
    title: string;
    startDateTime: string;
    link: string;
  };
}>();

const isActive = ref(false);

const openDialog = () => {
  isActive.value = true;
};
</script>

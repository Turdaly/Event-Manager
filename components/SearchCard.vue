<template>
  <div class="t-flex t-justify-between">
    <div class="t-p-4 t-border-b">
      <div>{{ event.dates.start.localDate }} {{ formattedTime }}</div>
      <div class="t-font-medium">{{ event.name }}</div>
      <div class="t-text-gray-500">{{ eventLocation }}</div>
    </div>
    <div>
      <v-btn color="#5271ff" class="text-capitalize bottom-0" @click="onClick(event)"
        >Add Event</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  event: Object,
});

const eventsStore = useEventsStore()
const onClick = async (event) => {
  const response = await eventsStore.postTicketEvent(event)
  if(response === true) {

  }
}


const formattedTime = computed(() => {
  return props.event.dates.start.timeTBA
    ? "TBA"
    : new Date(
        `1970-01-01T${props.event.dates.start.localTime}`
      ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
});

const eventLocation = computed(() => {
  const venue = props.event._embedded.venues[0];
  return `${venue.city.name}, ${venue.state.stateCode} ${venue.name}`;
});
</script>

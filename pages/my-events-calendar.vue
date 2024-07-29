<template>
  <div>
    <HeaderMenu />
    <div class="t-flex t-flex-col t-p-6 t-bg-primary t-rounded-lg t-shadow-md">
      <h3 class="t-text-xl t-font-medium t-mb-2">Calendar</h3>
      <h4 class="t-mb-4">View and edit your events.</h4>
      <div class="t-w-full t-h-full">
        <VCalendar
          :attributes="eventsStore.attributes"
          locale="en"
          style="width: 100%; height: 100%"
          @dayclick="handleDayClick"
        >
        </VCalendar>
      </div>
    </div>

    <!-- Dialog -->
    <div
      v-if="isActive"
      class="t-fixed t-inset-0 t-flex t-items-center t-justify-center t-bg-gray-800 t-bg-opacity-50 t-z-10"
    >
      <div
        v-if="selectedEvent"
        class="t-bg-white t-rounded-lg t-shadow-lg t-max-w-lg t-w-full t-p-6"
      >
        <div class="t-flex t-justify-between t-items-center">
          <h3 class="t-text-xl t-font-medium">Meeting Details</h3>
          <button @click="isActive = false" class="t-text-gray-500">
            &times;
          </button>
        </div>
        <div class="t-mt-4 t-flex t-flex-col t-items-center">
          <img src="/logo.png" alt="Logo" class="t-w-32 t-h-auto t-mb-4" />
          <p class="t-text-lg">
            <span class="t-font-medium">Meeting Title:</span>
            {{ selectedEvent.title }}
          </p>
          <p class="t-text-lg">
            <span class="t-font-medium">Start Date & Time:</span>
            {{ selectedEvent.startDateTime }}
          </p>
          <p class="t-text-lg">
            <span class="t-font-medium">Invited Participants:</span>
          </p>
          <p class="t-text-lg">
            <span class="t-font-medium">Meeting URL:</span>
            <a
              :href="selectedEvent.link_address"
              target="_blank"
              class="t-text-blue-500"
              >{{ selectedEvent.link_address }}</a
            >
          </p>
        </div>
        <div class="t-flex t-justify-between t-mt-6">
          <button class="t-bg-blue-500 t-text-white t-px-4 t-py-2 t-rounded-lg">
            Add To Google Calendar
          </button>
          <a
            :href="selectedEvent.link_address"
            target="_blank"
            class="t-bg-blue-500 t-text-white t-px-4 t-py-2 t-rounded-lg"
            >Open Meeting</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEventsStore();
const selectedEvent = ref<Types.Event.MyEvent | null>(null);
const isActive = ref(false);
const handleDayClick = (day: Types.Template.Day) => {
  const event = eventsStore.myEvents.find(
    (event) => new Date(event.date).toDateString() === day.date.toDateString()
  );
  if (event) {
    selectedEvent.value = event;
    isActive.value = true;
  }
};
</script>

<template>
  <div class="t-flex t-flex-col t-gap-6 p-6">
    <!-- 4 Events -->
    <div class="t-grid t-grid-cols-1 md:t-grid-cols-2 t-gap-6">
      <div
        v-for="(event, index) in eventsStore.eventItems"
        :key="index"
        class="t-flex t-flex-col t-items-center t-p-6 t-bg-primary t-rounded-lg t-shadow-md"
      >
        <Icon
          :name="event.icon"
          class="t-text-4xl t-mb-4 t-text-accent"
        />
        <h3 class="t-font-medium t-text-xl t-mb-2">
          {{ event.title }} {{ event.count }}
        </h3>
        <p class="t-text-gray-600">
          {{ event.paragraph }}
        </p>
      </div>
    </div>

    <!-- Calendar -->
    <div class="t-flex t-flex-col t-p-6 t-bg-primary t-rounded-lg t-shadow-md">
      <h3 class="t-text-xl t-font-medium t-mb-4">Calendar</h3>
      <div class="t-w-full t-h-full">
        <VCalendar
          :attributes="eventsStore.attributes"
          locale="en"
          style="width: 100%; height: 100%"
        />
      </div>
    </div>

    <!-- My Events -->
    <div class="t-bg-primary t-p-6 t-rounded-lg t-shadow-md">
      <h3 class="t-font-medium t-text-xl t-mb-4">
        My Events
      </h3>
      <EventTable :meetings="eventsStore.myEvents">
        <template v-slot:title>
          Meeting Title
        </template>
        <template v-slot:address>
          Meeting Link
        </template>
        <template v-slot:message>
          You have no upcoming events
        </template>
      </EventTable>
    </div>
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEventsStore();


</script>

<style scoped></style>

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
          @dayclick="handleDayClick"
        />
      </div>
    </div>

     <!-- Calendar Dialog -->
     <div
      v-if="isActive"
      class="t-fixed t-inset-0 t-flex t-items-center t-justify-center t-bg-neutral-600 t-bg-opacity-50 t-z-10"
      @click="isActive = false"
    >
      <div
        class="t-bg-white t-rounded-md t-shadow-lg t-max-w-lg t-w-full t-p-6"
        @click.stop
      >
        <v-img src="/logo.png" :width="200" alt="Logo" class="mx-auto" />
        <h3 class="t-text-xl t-font-medium t-text-center">Meeting Details</h3>
        <div class="t-flex t-flex-col t-gap-4 t-mt-4">
          <div
            v-for="event in selectedEvents"
            :key="event.id"
            class="t-mt-4 t-flex t-flex-col t-items-between"
          >
            <p class="t-text-lg">
              <span class="t-font-medium t-mr-1">Meeting Title:</span>
              {{ event.title }}
            </p>
            <p class="t-text-lg">
              <span class="t-font-medium t-mr-1">Start Date & Time:</span>
              {{ event.startDate }} {{ event.startTime }}
            </p>
            <p class="t-text-lg">
              <span class="t-font-medium t-mr-1">Meeting URL:</span>
              <a
                :href="event.link_address"
                target="_blank"
                class="t-text-blue-500"
                >{{ event.link_address }}</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- My Events -->
    <div class="t-flex t-flex-col t-bg-primary t-p-6 t-rounded-lg t-shadow-md">
      <h3 class="t-font-medium t-text-xl t-mb-4">
        My Events
      </h3>
      <p v-if="eventsStore.myEvents.length === 0">
        You have no upcoming events
      </p>
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

// Calendar
const selectedEvents = ref<Types.Event.MyEvent[]>([]);
const isActive = ref(false);
const handleDayClick = (day: Types.Template.Day) => {
  const events = eventsStore.myEvents.filter(
    (event) => new Date(event.startDate).toDateString() === day.date.toDateString()
  );
  selectedEvents.value = events;
  if(selectedEvents.value.length > 0){
    isActive.value = true;
  }
};

onMounted( async () => {
  await eventsStore.fetchEvents()
})
</script>


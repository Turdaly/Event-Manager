<template>
  <div>
    <HeaderMenu />
    <div class="t-flex t-flex-col t-p-6 t-bg-primary t-rounded-lg t-shadow-md">
      <h3 class="t-text-xl t-font-medium t-mb-2">Календарь</h3>
      <h4 class="t-mb-4">Просматривайте и редактируйте свои события.</h4>
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
      class="t-fixed t-inset-0 t-flex t-items-center t-justify-center t-bg-neutral-600 t-bg-opacity-50 t-z-10"
      @click="isActive = false"
    >
      <div
        class="t-bg-white t-rounded-md t-shadow-lg t-max-w-lg t-w-full t-p-6"
        @click.stop
      >
        <v-img src="/logo.png" :width="200" alt="Logo" class="mx-auto" />
        <h3 class="t-text-xl t-font-medium t-text-center">Детали</h3>
        <div class="t-flex t-flex-col t-gap-4 t-mt-4">
          <div
            v-for="event in selectedEvents"
            :key="event.id"
            class="t-mt-4 t-flex t-flex-col t-items-between"
          >
            <p class="t-text-lg">
              <span class="t-font-medium t-mr-1">Названия:</span>
              {{ event.title }}
            </p>
            <p class="t-text-lg">
              <span class="t-font-medium t-mr-1">Дата и время начала:</span>
              {{ event.startDate }} {{ event.startTime }}
            </p>
            <p class="t-text-lg">
              <span class="t-font-medium t-mr-1">Ссылка:</span>
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
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEventsStore();
const selectedEvents = ref<Types.Event.MyEvent[]>([]);
const isActive = ref(false);
const handleDayClick = (day: Types.Template.Day) => {
  const events = eventsStore.myEvents.filter(
    (event) =>
      new Date(event.startDate).toDateString() === day.date.toDateString()
  );
  selectedEvents.value = events;
  if (selectedEvents.value.length > 0) {
    isActive.value = true;
  }
};

onMounted(async () => {
  await eventsStore.fetchEvents();
});
</script>

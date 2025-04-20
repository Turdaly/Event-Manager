<template>
  <div class="t-flex t-flex-col t-gap-4">
    <div>
      <HeaderMenu />
    </div>
    <!-- Online Meeting Table -->
    <div class="t-bg-primary t-p-4">
      <div class="t-text-center">
        <h1 class="t-text-xl t-font-medium t-mb-1">Мои Мероприятия</h1>
        <h3 class="t-text-lg">Просматривайте и редактируйте свои события.</h3>
      </div>
      <div class="t-flex t-flex-col t-gap-12">
        <div>
          <h3 class="t-text-lg t-font-medium t-mb-1">Онлайн Встреча</h3>
          <p class="t-text-sm">У вас нет запланированных встреч в Интернете</p>
          <div>
            <EventTable :meetings="getOnlineMeeting">
              <template v-slot:title> Название встречи </template>
              <template v-slot:address> Ссылка встречи </template>
            </EventTable>
          </div>
        </div>
        <!-- Offline Meeting Table -->
        <div>
          <h3 class="t-text-lg t-font-medium t-mb-1">Офлайн Встреча</h3>
          <p class="t-text-sm">У вас нет предстоящей офлайн-встречи</p>
          <div>
            <EventTable :meetings="getOfflineMeeting">
              <template v-slot:title> Meeting Title </template>
              <template v-slot:address> Meeting address </template>
            </EventTable>
          </div>
        </div>
        <!-- Livestream -->
        <div>
          <h3 class="t-text-lg t-font-medium t-mb-1">Трансляция</h3>
          <p class="t-text-sm">У вас нет предстоящих прямых трансляций</p>
          <div>
            <EventTable :meetings="getLivestreamMeeting">
              <template v-slot:title> Livestream Title </template>
              <template v-slot:address> Livestream Link </template>
            </EventTable>
          </div>
        </div>
        <!-- Webinars -->
        <div>
          <h3 class="t-text-lg t-font-medium t-mb-1">Вебинар</h3>
          <p class="t-text-sm">У вас нет запланированных вебинаров</p>
          <div>
            <EventTable :meetings="getWebinarMeeting">
              <template v-slot:title> Webinars Title </template>
              <template v-slot:address> Webinars Link </template>
            </EventTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEventsStore();

const getOnlineMeeting = computed((): Types.Event.MyEvent[] => {
  return eventsStore.myEvents.filter(
    (event) => event.type === "online-meeting"
  );
});
const getOfflineMeeting = computed(() => {
  return eventsStore.myEvents.filter(
    (event) => event.type === "offline-meeting"
  );
});
const getWebinarMeeting = computed(() => {
  return eventsStore.myEvents.filter((event) => event.type === "webinar");
});
const getLivestreamMeeting = computed(() => {
  return eventsStore.myEvents.filter((event) => event.type === "livestream");
});

onMounted(async () => {
  await eventsStore.fetchEvents();
});
</script>

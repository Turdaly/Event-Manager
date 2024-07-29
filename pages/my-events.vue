<template>
  <div class="t-flex t-flex-col t-gap-4">
    <div>
      <HeaderMenu />
    </div>
    <div class="t-text-center t-p-4 t-bg-primary">
      <h1 class="t-text-xl t-font-medium t-mb-1">My Events</h1>
      <h3 class="t-text-lg">View and edit your events.</h3>
    </div>
    <!-- Online Meeting Table -->
    <div class="t-flex t-flex-col t-gap-12">
      <div>
        <h3 class="t-text-lg t-font-medium t-mb-1">Online Meetings</h3>
        <p class="t-text-sm">You have no upcoming online meetings</p>
        <div>
          <EventTable :meetings="getOnlineMeeting">
            <template v-slot:title> Meeting Title </template>
            <template v-slot:address> Meeting Link </template>
          </EventTable>
        </div>
      </div>
      <!-- Offline Meeting Table -->
      <div>
        <h3 class="t-text-lg t-font-medium t-mb-1">Offline Meetings</h3>
        <p class="t-text-sm">You have no upcoming offline meetings</p>
        <div>
          <EventTable :meetings="getOfflineMeeting">
            <template v-slot:title> Meeting Title </template>
            <template v-slot:address> Meeting address </template>
          </EventTable>
        </div>
      </div>
      <!-- Livestream -->
      <div>
        <h3 class="t-text-lg t-font-medium t-mb-1">Livestreams</h3>
        <p class="t-text-sm">You have no upcoming livestreams</p>
        <div>
          <EventTable :meetings="getLivestreamMeeting">
            <template v-slot:title> Livestream Title </template>
            <template v-slot:address> Livestream Link </template>
          </EventTable>
        </div>
      </div>
      <!-- Webinars -->
      <div>
        <h3 class="t-text-lg t-font-medium t-mb-1">Webinars</h3>
        <p class="t-text-sm">You have no upcoming webinars</p>
        <div>
          <EventTable :meetings="getWebinarMeeting">
            <template v-slot:title> Webinars Title </template>
            <template v-slot:address> Webinars Link </template>
          </EventTable>
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

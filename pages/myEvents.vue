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
        <p class="t-text-sm ">You have no upcoming online meetings</p>
        <div>
          <EventTable :meetings="eventsStore.meetings">
            <template v-slot:title>
              Meeting Title
            </template>
            <template v-slot:address>
              Meeting Link
            </template>
          </EventTable>
        </div>
      </div>
      <!-- Offline Meeting Table -->
      <div>
        <h3 class="t-text-lg t-font-medium t-mb-1">Ofline Meetings</h3>
        <p class="t-text-sm ">You have no upcoming ofline meetings</p>
        <div>
          <EventTable >
            <template v-slot:title>
              Meeting Title
            </template>
            <template v-slot:address>
              Meeting address
            </template>
          </EventTable>
        </div>
      </div>
      <!-- Livestream -->
      <div>
        <h3 class="t-text-lg t-font-medium t-mb-1">Livestreams</h3>
        <p class="t-text-sm ">You have no upcoming ofline meetings</p>
        <div>
          <EventTable >
            <template v-slot:title>
              Livestream Title
            </template>
            <template v-slot:address>
              Meeting Link
            </template>
            <template v-slot:message>
              You have no upcoming livestreams
            </template>
          </EventTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEventsStore();
</script>


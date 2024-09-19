<template>
  <div v-if="meetings.length > 0" class="sm:t-p-4">
    <table class="t-table-fixed t-w-full t-divide-y">
      <thead class="">
        <tr>
          <th
            scope="col"
            class="t-px-6 t-py-3 t-text-left t-text-xs t-font-bold t-uppercase t-tracking-wider"
          >
            <slot name="title">Title</slot>
          </th>
          <th
            scope="col"
            class="t-px-6 t-py-3 t-text-left t-text-xs t-font-bold t-uppercase t-tracking-wider t-hidden sm:t-block"
          >
            Start Date & Time
          </th>
          <th
            scope="col"
            class="t-px-6 t-py-3 t-text-left t-text-xs t-font-bold t-uppercase t-tracking-wider"
          >
            <slot name="address">Link & Address</slot>
          </th>
          <th
            scope="col"
            class="t-px-6 t-py-3 t-text-left t-text-xs t-font-bold t-uppercase t-tracking-wider"
          >
            Settings
          </th>
        </tr>
      </thead>
      <tbody class="t-divide-y">
        <tr v-for="meeting in meetings" :key="meeting.id">
          <td class="t-px-6 t-py-4 t-whitespace-nowrap">
            {{ meeting.title }}
          </td>
          <td class="t-px-6 t-py-4 t-whitespace-nowrap t-hidden sm:t-block">
            {{ meeting.startDate.slice(0, 10) }} <br />
            & {{ meeting.startTime }}
          </td>
          <td class="t-px-6 t-py-4 t-whitespace-nowrap">
            <NuxtLink
              :to="meeting.link_address"
              target="_blank"
              class="t-text-accent"
              >Link</NuxtLink
            >
          </td>
          <td
            class="t-px-6 t-py-4 t-whitespace-nowrap t-cursor-pointer t-font-bold t-text-accent"
          >
            <div class="t-flex t-items-center t-gap-2">
              <MeetingDialog :meeting="meeting" />
              <Icon
                name="material-symbols:delete-outline-rounded"
                class="t-text-red-500 t-size-5"
                @click="eventsStore.removeEvent(meeting.id)"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const eventsStore = useEventsStore();

defineProps<{
  meetings: Types.Event.MyEvent[];
}>();
</script>

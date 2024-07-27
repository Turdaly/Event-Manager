import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", () => {
  const events = ref({
    active: 0 as Number,
    attendees: 0 as Number,
    online: 0 as Number,
    offline: 0 as Number,
  });
  const eventItems = computed(() => [
    {
      title: 'Active Events',
      count: events.value.active,
      icon: 'material-symbols:calendar-month',
      paragraph: 'Including Upcoming & Current',
    },
    {
      title: 'Event Attendees',
      count: events.value.attendees,
      icon: 'material-symbols:event-available-rounded',
      paragraph: 'Includes Active & Past Events',
    },
    {
      title: 'Online Events',
      count: events.value.online,
      icon: 'material-symbols:chart-data-outline',
      paragraph: 'Including Upcoming & Current',
    },
    {
      title: 'My Events',
      count: events.value.offline,
      icon: 'material-symbols:mail-outline',
      paragraph: 'Including Upcoming & Current',
    },
  ])
  const meetings = ref<Types.Event.Meeting[]>([
    {
      id: 1,
      title: 'Weekly Sync',
      startDateTime: '2024-07-27 10:00 AM',
      link: 'https://example.com/meeting/1',
    },
    {
      id: 2,
      title: 'Project Kickoff',
      startDateTime: '2024-07-28 02:00 PM',
      link: 'https://example.com/meeting/2',
    },
  ]);
  return { events, eventItems, meetings };
});

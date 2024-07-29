import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", () => {

  const myEvents = ref<Types.Event.MyEvent[]>([
    {
      id: 1,
      title: 'Weekly Sync',
      isComplete: false,
      dates: Date.now(),
      color: '#5271ff',
      startDateTime: '2024-07-27 10:00 AM',
      link_address: 'https://example.com/meeting/1',
    },
  ]);

  const attributes: ComputedRef<Types.Event.Attribute[]> = computed(() => [
    ...myEvents.value.map((todo) => ({
      dates: todo.dates,
      highlight: {
        style: {
          backgroundColor: `${todo.color}`,
        },
        ...(todo.isComplete && { class: "opacity-75" }),
      },
      popover: {
        label: todo.title,
      },
    })),
  ]);
  // Template
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
  return { events, eventItems, attributes, myEvents };
});

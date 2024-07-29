import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", () => {
  const { $api } = useNuxtApp();
  const url = "/myEvents";
  const myEvents = ref<Types.Event.MyEvent[]>([]);

  const postEvent = async (data: Types.Event.MyEvent) => {
    try {
      const response = await $api.post(url, data);
      console.log(response);
      return true;
    } catch (err) {
      console.log(err);
    }
  };
  const fetchEvents = async () => {
    try {
      const response = await $api.get(url);
      myEvents.value = response.data;
      console.log('MyEvents:', myEvents.value)
    } catch (err) {
      console.log(err);
    }
  };
  const removeEvent = async (id: string) => {
    try {
      if(id) {
        await $api.delete(`${url}/${id}`)
        await fetchEvents()
      }
    } catch(err) {
      console.log(err)
    }
  }

  const attributes: ComputedRef<Types.Event.Attribute[]> = computed(() => [
    ...myEvents.value.map((todo) => ({
      dates: todo.date,
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
      title: "Active Events",
      count: events.value.active,
      icon: "material-symbols:calendar-month",
      paragraph: "Including Upcoming & Current",
    },
    {
      title: "Event Attendees",
      count: events.value.attendees,
      icon: "material-symbols:event-available-rounded",
      paragraph: "Includes Active & Past Events",
    },
    {
      title: "Online Events",
      count: events.value.online,
      icon: "material-symbols:chart-data-outline",
      paragraph: "Including Upcoming & Current",
    },
    {
      title: "My Events",
      count: events.value.offline,
      icon: "material-symbols:mail-outline",
      paragraph: "Including Upcoming & Current",
    },
  ]);
  return { events, eventItems, attributes, myEvents, postEvent, fetchEvents, removeEvent };
});

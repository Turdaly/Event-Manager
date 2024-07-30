import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", () => {
  const auth = useAuth();
  const { $api } = useNuxtApp();
  const url = "/myEvents";
  const myEvents = ref<Types.Event.MyEvent[]>([]);

  // Request
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
      if (response.data) {
        myEvents.value = response.data.filter(
          (event: Types.Event.MyEvent) => event.email === auth.user.email
        );
      }
      console.log("MyEvents:", myEvents.value);
    } catch (err) {
      console.log(err);
    }
  };
  const removeEvent = async (id: string) => {
    try {
      if (id) {
        await $api.delete(`${url}/${id}`);
        await fetchEvents();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const attributes: ComputedRef<Types.Event.Attribute[]> = computed(() => [
    ...myEvents.value.map((todo) => ({
      dates: todo.startDate,
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

  const getOnlineMeeting = computed((): Types.Event.MyEvent[] => {
    return myEvents.value.filter(
      (event) => event.type === "online-meeting"
    );
  });
  const getOfflineMeeting = computed(() => {
    return myEvents.value.filter(
      (event) => event.type === "offline-meeting"
    );
  });
  const getWebinarMeeting = computed(() => {
    return myEvents.value.filter((event) => event.type === "webinar");
  });
  const getLivestreamMeeting = computed(() => {
    return myEvents.value.filter((event) => event.type === "livestream");
  });
  // Template

  const eventItems = computed(() => [
    {
      title: "Online Meeting",
      count: getOnlineMeeting.value.length,
      icon: "material-symbols:calendar-month",
      paragraph: "Including Upcoming & Current",
    },
    {
      title: "Offline Meeting",
      count: getOfflineMeeting.value.length,
      icon: "material-symbols:event-available-rounded",
      paragraph: "Includes Active & Past Events",
    },
    {
      title: "Webinar",
      count: getWebinarMeeting.value.length,
      icon: "material-symbols:chart-data-outline",
      paragraph: "Including Upcoming & Current",
    },
    {
      title: "Livestream",
      count: getLivestreamMeeting.value.length,
      icon: "material-symbols:mail-outline",
      paragraph: "Including Upcoming & Current",
    },
  ]);
  return {
    eventItems,
    attributes,
    myEvents,
    postEvent,
    fetchEvents,
    removeEvent,
  };
});

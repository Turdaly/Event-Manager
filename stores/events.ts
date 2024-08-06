import { defineStore } from "pinia";
export const useEventsStore = defineStore("events", () => {
  const auth = useAuth();
  const { $api } = useNuxtApp();
  const url = "/myEvents";
  const myEvents = ref<Types.Event.MyEvent[]>([]);
  const postCounter = ref<number>(10);
  const fetchCounter = ref<number>(0);
  // Request
  const postEvent = async (data: Types.Event.MyEvent) => {
    try {
      const response = await $api.post(url, data);
      postCounter.value++;
      console.log(response);
      return true;
    } catch (err) {
      console.log(err);
    }
  };
  const postTicketEvent = async (data: Types.Event.TicketEvent) => {
    try {
      if (data) {
        const venue = data._embedded.venues[0];
        const newData = {
          id: data.id,
          email: auth.user.email,
          title: data.name,
          color: "#5271ff",
          type: "offline-meeting",
          isComplete: false,
          startTime: data.dates.start.localTime || "TBA",
          startDate: data.dates.start.localDate,
          link_address: `${venue.city.name}, ${venue.state.stateCode} ${venue.name}`,
        };
        const response = await $api.post(url, newData);
        postCounter.value++;
        if (response) {
          return true;
        }
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchEvents = async () => {
    if (postCounter.value > fetchCounter.value) {
      fetchCounter.value = postCounter.value;
      console.log(postCounter.value, fetchCounter.value);
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
    }
  };
  const removeEvent = async (id: string) => {
    try {
      if (id) {
        await $api.delete(`${url}/${id}`);
        postCounter.value++;
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
    return myEvents.value.filter((event) => event.type === "online-meeting");
  });
  const getOfflineMeeting = computed(() => {
    return myEvents.value.filter((event) => event.type === "offline-meeting");
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
    postTicketEvent,
  };
});

<template>
  <div class="t-bg-primary t-p-4">
    <div class="t-flex t-flex-col t-gap-4">
      <v-text-field
        v-model="keyword"
        :loading="loading"
        append-inner-icon="mdi-magnify"
        variant="outlined"
        density="compact"
        base-color="#5271ff"
        color="#5271ff"
        label="Search Event by Name, Artis, Genre, Location"
        autofocus
        hide-details
        @click:append-inner="onClick"
        @keyup.enter="onClick"
      ></v-text-field>
      <h1 class="t-text-2xl">Upcoming Events</h1>
      <div v-if="isFind === true">
        <div
          v-for="event in events"
          :key="event.id"
          class="t-w-full t-border-gray-400"
        >
          <SearchCard :event="event" />
        </div>
      </div>
      <div v-if="isFind === false">
        We're sorry, but we couldn't find any events.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const url = "/events";
const apikey = "xF7NDSJNETaMQ8pRhwxJud7cFEYUmkZn";
const keyword = ref<string>("");
const page = ref<number>(0);
const events = ref<Types.Event.TicketEvent[]>([]);
const loading = ref<boolean>(false);
const isFind = ref<boolean | null>(null);
const onClick = async () => {
  try {
    if (keyword.value) {
      loading.value = true;
      const { $apiTicket } = useNuxtApp();
      setTimeout(() => {
        loading.value = false;
      }, 1000);

      const response = await $apiTicket.get(
        `${url}?keyword=${keyword.value}&apikey=${apikey}&locale=*&page=${page.value}`
      );
      if (response.data.page.totalElements > 0) {
        events.value = response.data._embedded.events;
        isFind.value = true;
      } else {
        isFind.value = false;
      }
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

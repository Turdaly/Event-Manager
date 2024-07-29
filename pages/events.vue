<template>
  <div class="t-flex t-flex-col t-gap-4">
    <HeaderMenu />
    <div class="t-bg-primary t-p-4">
      <div class="t-mb-8">
        <h1 class="t-text-2xl t-font-medium t-mb-1">
          Start building your first event
        </h1>
        <h2 class="t-text-xl">
          Start from scratch or pick a template to set up your event faster.
        </h2>
      </div>
      <div class="t-grid t-grid-cols-1 t-gap-8 t-m-4 lg:t-grid-cols-2">
        <EventCard
          v-for="(item, index) in bodyItems"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bodyItems: Types.Template.BodyItem[] = [
  {
    img: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fae21f5463949551d41499bb326914078.cdn.bubble.io%2Ff1683719026452x380289349111135400%2Fworkshop-2f2fe16a2e9ca8f855b3fb92845d4a99.png?w=192&h=128&auto=compress&dpr=2&fit=max",
    title: "Meeting Online",
    paragraph:
      "Ideal for a business or social virtual meeting with chat and screen sharing.",
    textButton: "Create Meeting",
    link: "create-online-meeting",
  },
  {
    img: "/off.png",
    title: "Meeting Offline",
    paragraph:
      "Ideal for a business or social in-person meeting with necessary arrangements.",
    textButton: "Create Meeting",
    link: "create-offline-meeting",
  },
  {
    img: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fae21f5463949551d41499bb326914078.cdn.bubble.io%2Ff1683720075211x916893341905532900%2Fwebinar-6a4efb0e86ef06e800cbdafc1d623498.png?w=192&h=128&auto=compress&dpr=2&fit=max",
    title: "Webinar",
    paragraph:
      "Ideal for presentations, lectures, workshops or seminars with an interactive audience.",
    textButton: "Create Webinar",
    link: "create-webinar",
  },
  {
    img: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fae21f5463949551d41499bb326914078.cdn.bubble.io%2Ff1683720763995x577121731943408400%2Fexpo-887d82b4e95ad9c41975bcb541c831f2%2520%25281%2529.png?w=192&h=128&auto=compress&dpr=1.25&fit=max",
    title: "Livestream",
    paragraph:
      "Engage your audience with interactive Livestreaming. Stream to multiple platforms.",
    textButton: "Create Livestream",
    link: "create-livestream",
  },
];
</script>

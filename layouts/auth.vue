<template>
  <div class="">
    <header class="t-flex t-flex-col t-items-center">
      <v-img
        src="/logo.png"
        :width="250"
        aspect-ratio="16/9"
        cover
        class="mx-auto"
      ></v-img>
      <p class="t-font-bold t-text-sm t-max-w-sm t-text-center">
        Event Manager предлагает комплексное решение для организации и управления вашими мероприятиями
      </p>
    </header>
    <main class="t-w-full">
      <slot></slot>
    </main>
  </div>
</template>

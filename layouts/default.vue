<template>
  <div class="t-flex t-h-screen">
    <aside
      class="t-h-full t-w-72 t-p-5 t-bg-primary t-flex-col t-hidden md:t-flex"
    >
      <div class="">
        <div class="t-flex t-flex-col t-gap-8">
          <div>
            <v-img
              src="/logo.png"
              :width="150"
              aspect-ratio="16/9"
              cover
              class=""
            ></v-img>
          </div>
          <div>
            <ul class="t-flex t-flex-col">
              <li
                v-for="item in menuItems"
                :key="item.name"
                class="t-flex t-items-center t-gap-3 t-px-6 t-py-2 hover:t-bg-hover"
              >
                <Icon :name="item.icon" class="t-size-6 t-text-accent" />
                <NuxtLink :to="{ name: item.link }"> {{ item.name }} </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
    <div class="t-flex t-flex-col t-w-full">
      <header class="t-p-4 t-bg-primary">
        <nav class="t-flex t-justify-end t-gap-4">
          <v-btn variant="outlined" color="#5271ff"> My Events </v-btn>
          <v-btn color="#5271ff"> Create Event </v-btn>
        </nav>
      </header>
      <main class="t-p-5 t-bg-secondary">
        <slot> </slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  { name: "Dashboard", link: "index", icon: "material-symbols:home" },
  { name: "Events", link: "events", icon: "material-symbols:calendar-month" },
  { name: "Settings", link: "index", icon: "material-symbols:settings-outline" },
  { name: "Logout", link: "index", icon: "tabler:logout-2" },
];
</script>

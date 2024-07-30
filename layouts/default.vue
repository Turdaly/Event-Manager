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
                :key="item.title"
                class="t-flex t-items-center t-gap-3 t-px-6 t-py-2 hover:t-bg-hover"
              >
                <Icon :name="item.icon" class="t-size-6 t-text-accent" />
                <NuxtLink :to="{ name: item.link }">
                  {{ item.title }}
                </NuxtLink>
              </li>
              <li
                @click="auth.logout"
                class="t-flex t-items-center t-gap-3 t-px-6 t-py-2 hover:t-bg-hover t-cursor-pointer"
              >
                <Icon name="tabler:logout-2" class="t-size-6 t-text-accent" />
                Logout
              </li>
            </ul>
          </div>
          <div class="t-flex t-flex-col t-items-center t-gap-4 t-mt-12">
            <v-img
              :width="50"
              aspect-ratio="1/1"
              alt="img user"
              rounded
              cover
              :src="auth.user.picture"
            >
            </v-img>
            <p class="t-text-sm">{{ auth.user.name }}</p>
            <p class="t-text-sm">{{ auth.user.email }}</p>
          </div>
        </div>
      </div>
    </aside>
    <div class="t-flex t-flex-col t-w-auto md:t-w-full t-px-4">
      <header class="t-p-4 t-bg-primary">
        <nav class="t-hidden md:t-flex t-gap-4 t-justify-end">
          <NuxtLink :to="{ name: 'my-events' }"
            ><v-btn variant="outlined" color="#5271ff">
              My Events
            </v-btn></NuxtLink
          >
          <NuxtLink :to="{ name: 'events' }">
            <v-btn color="#5271ff"> Create Event </v-btn>
          </NuxtLink>
        </nav>
        <div class="t-flex t-justify-end md:t-hidden">
          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <Icon
                v-bind="props"
                name="solar:hamburger-menu-outline"
                class="t-size-9"
              ></Icon>
            </template>
            <v-list class="">
              <v-list-item v-for="(item, i) in menu" :key="i">
                <NuxtLink :to="{ name: item.link }"
                  ><v-list-item-title>{{
                    item.title
                  }}</v-list-item-title></NuxtLink
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </header>
      <main class="t-p-5 t-bg-secondary">
        <slot> </slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const auth = useAuth();
const menuItems = [
  { title: "Dashboard", link: "index", icon: "material-symbols:home" },
  { title: "Events", link: "events", icon: "material-symbols:calendar-month" },
  {
    title: "Search",
    link: "search",
    icon: "ph:ticket-bold",
  },
];
const headerItems = [
  { title: "My Events ", link: "my-events" },
  { title: "Create Event", link: "events" },
];
const menu = [...headerItems, ...menuItems];
</script>

<template>
  <div>
    <Header />
    <div class="flex flex-nowrap">
      <div class="w-[300px] col-span h-screen bg-blue-900">
        <ul class="px-2 py-5">
          <NuxtLink
            :to="item.goto"
            @click="(selected = item.id) && (selectedRoute = item.goto)"
            v-for="item in sideNavItems"
          >
            <li
              class="h-10 w-full mb-2 rounded cursor-pointer text-white flex items-center px-2"
              :class="{ 'bg-white ': selected === item.id }"
            >
              <div class="flex">
                <div class="self-center">
                  <font-awesome-icon
                    icon="fa-info-circle"
                    :class="{ 'text-blue-900': selected === item.id }"
                    class="text-xl me-1"
                  />
                </div>
                <div
                  :class="{ 'text-blue-900': selected === item.id }"
                  class="self-center"
                >
                  {{ item.name }}
                </div>
              </div>
            </li>
          </NuxtLink>
        </ul>
      </div>

      <div class="w-full">
        <div class="py-5 px-2">
          <slot />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

const selected: Ref<number> = ref(0);
const selectedRoute = ref("");
const sideNavItems = ref([
  {
    id: 1,
    name: "General Information",
    goto: "/control-panel/general-information",
  },
  {
    id: 2,
    name: "Account Management",
    goto: "/control-panel/account-management",
  },
  {
    id: 3,
    name: "Menu Management",
    goto: "/control-panel/menu-management",
  },
  {
    id: 4,
    name: "Account Information",
    goto: "/control-panel/account-information",
  },
  {
    id: 5,
    name: "User Management",
    goto: "/control-panel/user-management",
  },
  {
    id: 6,
    name: "Settings",
    goto: "/control-panel/settings",
  },
]);
</script>

<template>
  <div>
    <Header />
    <div class="flex flex-nowrap">
      <div
        class="w-[300px] col-span h-[calc(100vh-176px)] overflow-auto bg-blue-900"
      >
        <ul class="px-2 py-5">
          <li v-for="listItem in sideNavItems">
            <div
              class="flex py-2 px-3 rounded-xl text-white mb-2 cursor-pointer"
              :class="{ 'bg-white text-blue-900': showIt === listItem.id }"
              @click="showListItems(listItem.id)"
            >
              <span class="self-center h-6 w-6 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                    :fill="showIt === listItem.id ? '#1e3a8a' : '#ffffff'"
                  />
                </svg>
              </span>

              <p
                class="text-sm font-bold"
                :class="{ 'text-blue-900': showIt === listItem.id }"
              >
                {{ listItem.name }}
              </p>
            </div>
            <ul v-if="showIt === listItem.id">
              <li class="mb-1 w-10/12 mx-auto" v-for="item in listItem?.links">
                <NuxtLink :to="item.goto">
                  <div
                    class="bg-transparent text-white text-sm text-center font-semibold py-2 px-3 border-[2px] rounded-xl border-white cursor-pointer"
                  >
                    {{ item.name }}
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="w-full h-[calc(100vh-176px)] overflow-y-auto">
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
const showIt = ref(0);
const sideNavItems = ref([
  {
    id: 1,
    name: "General Information",
    goto: "/control-panel/general-information",
  },
  {
    id: 2,
    name: "Account Management",
    links: [
      {
        id: 21,
        name: "Membership",
        goto: "/account-management/membership",
      },
      {
        id: 22,
        name: "Account Info",
        goto: "/account-management/account-info",
      },
      {
        id: 23,
        name: "Branches",
        goto: "/account-management/branches",
      },
    ],
  },
  {
    id: 3,
    name: "Menu Management",
    links: [
      {
        id: 31,
        name: "Categories",
        goto: "/control-panel/account-management",
      },
      {
        id: 32,
        name: "Products",
        goto: "/control-panel/account-management",
      },
      {
        id: 33,
        name: "Communication accounts",
        goto: "/control-panel/account-management",
      },
      {
        id: 34,
        name: "Themes",
        goto: "/control-panel/account-management",
      },
      {
        id: 35,
        name: "Domain management",
        goto: "/control-panel/account-management",
      },
      {
        id: 36,
        name: " Offers and discounts",
        goto: "/control-panel/account-management",
      },
      {
        id: 37,
        name: "Ratings",
        goto: "/control-panel/account-management",
      },
    ],
  },
  {
    id: 4,
    name: "User Management",
    links: [
      {
        id: 41,
        name: "Users",
        goto: "/control-panel/account-management",
      },
      {
        id: 42,
        name: "Users permissions",
        goto: "/control-panel/account-management",
      },
    ],
  },
  {
    id: 5,
    name: "Settings",
    links: [
      {
        id: 51,
        name: " Delete Account",
        goto: "/control-panel/account-management",
      },
      {
        id: 52,
        name: " Technical support",
        goto: "/control-panel/account-management",
      },
    ],
  },
]);

const showListItems = (value: number) => {
  if (value === showIt.value) {
    showIt.value = 0;
  } else {
    showIt.value = value;
  }
};
</script>

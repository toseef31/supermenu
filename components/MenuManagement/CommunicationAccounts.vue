<template>
  <div>
    <div class="mt-20 lg:px-20 md:px-10">
      <p class="text-blue-900 text-2xl font-semibold mb-10">
        Add social media accounts
      </p>
      <div class="lg:w-3/4 w-full mb-10">
        <div class="grid grid-cols-12 gap-x-8 gap-y-8">
          <div class="col-span-6" v-for="index in 6">
            <div class="flex">
              <img
                src="/images/facebook.svg"
                class="self-center h-14 w-14 rounded-xl me-2"
                alt=""
              />
              <input
                id="name"
                type="text"
                class="w-full self-center h-10 px-4 border-2 rounded-xl focus:outline-blue-900 me-2"
              />
              <img
                src="/images/check-box.svg"
                class="self-center h-6 w-6"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="flex mt-8">
          <div>
            <img
              src="/images/check-mark.svg"
              v-if="checked"
              class="w-6 h-6 me-4 cursor-pointer"
              alt=""
              @click="checked = false"
            />
            <img
              src="/images/check-box.svg"
              v-else
              class="w-6 h-6 me-4 cursor-pointer"
              alt=""
              @click="checked = true"
            />
          </div>
          <p class="text-sm text-blue-900">
            To add the social media account to the menu automatically
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(true);
</script>

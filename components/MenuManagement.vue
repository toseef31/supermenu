<template>
  <div>
    <div class="grid grid-cols-12 gap-y-6 gap-x-4">
      <div
        class="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12"
        v-for="index in 20"
      >
        <div
          class="xl:w-1/2 lg:w-4/6 md:w-3/4 w-11/12 mx-auto h-32 flex justify-center items-center border rounded shadow-lg shadow-gray-500/50"
        >
          <div>
            <div class="mb-4 h-8 w-8 mx-auto">
              <img src="/images/star.svg" class="w-full" alt="" />
            </div>
            <div class="text-[#202F8F] text-semimbold text-lg text-center">
              menu item
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mt-12">
      <button
        class="me-6 h-12 w-40 flex justify-center items-center rounded-lg bg-blue-900 text-white text-sm font-semibold"
      >
        Add new product
      </button>
      <button
        class="me-12 h-12 w-40 flex justify-center items-center rounded-lg shadow-lg bg-gray-100 text-blue-900 text-sm font-semibold"
      >
        Total products
      </button>
      <div
        class="h-12 w-12 rounded-full flex justify-center items-center bg-sky-600 text-black text-2xl"
      >
        10
      </div>
    </div>

    <div class="">
      <div
        class="grid grid-cols-7 h-20 py-2 mt-12 mb-6 w-11/12 box-shadow mx-auto"
      >
        <div class="flex justify-center items-center px-2">
          <span>one</span>
        </div>

        <div class="flex justify-center items-center px-2">
          <span>two</span>
        </div>

        <div class="flex justify-center items-center px-2">
          <span>three</span>
        </div>

        <div class="flex justify-center items-center px-2">
          <span>four</span>
        </div>

        <div class="flex justify-center items-center px-2">
          <span>five</span>
        </div>
        <div class="col-span-2 justify-center flex items-center px-2">
          <span>one ihsdg skjdf</span>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <button
        class="h-12 w-40 flex justify-center items-center rounded-lg bg-green-700 text-white text-sm font-semibold"
      >
        Add
      </button>
    </div>

    <!-- section 3 -->
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
    <!-- section 4 -->
    <div class="mt-20 lg:px-20 md:px-10">
      <div class="text-blue-900 text-2xl font-semibold mb-10">
        Domain Management
      </div>

      <div class="text-gray-400 text-2xl mb-6">QR CODE</div>
      <div class="flex mb-6">
        <div
          class="w-40 h-40 flex justify-center items-center rounded-full text-sm text-black bg-gray-300 me-6"
        >
          Download PDF
        </div>
        <div class="w-40 h-40">
          <img src="/images/qrcode.png" class="w-full" alt="" />
        </div>
      </div>

      <div class="text-blue-900 text-2xl mb-3">Menu range</div>
      <div class="w-1/3">
        <input
          type="url"
          class="h-10 px-2 w-full border-2 rounded-xl focus:outline-blue-900"
          placeholder="http://www.domain.com/super-menu"
        />
      </div>
    </div>

    <!-- section 6 -->
    <div class="mt-20 lg:px-20 md:px-10">
      <div class="text-blue-900 text-2xl font-semibold mb-10">Ratings</div>

      <div class="text-gray-400 text-2xl mb-6">QR CODE</div>
      <div class="flex mb-6">
        <div
          class="w-40 h-40 flex justify-center items-center rounded-full text-sm text-black bg-gray-300 me-6"
        >
          Download PDF
        </div>
        <div class="w-40 h-40">
          <img src="/images/qrcode.png" class="w-full" alt="" />
        </div>
      </div>

      <div class="text-blue-900 text-2xl mb-3">Menu range</div>
      <div class="w-1/3">
        <input
          type="url"
          class="h-10 px-2 w-full border-2 rounded-xl focus:outline-blue-900"
          placeholder="http://www.domain.com/super-menu"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(true);
</script>

<style>
.box-shadow {
  box-shadow: inset 2px 2px 5px #00000029, 2px 2px 5px #00000029;
  border-radius: 9px;
}
</style>

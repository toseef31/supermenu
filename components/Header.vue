<template>
  <div class="relative">
    <div class="bg-[#202F8F] py-4">
      <div class="flex justify-between md:px-20 px-10">
        <div class="w-40">
          <img src="/images/logo.png" alt="" />
        </div>
        <div class="flex self-center hidden md:inline-flex">
          <div class="self-center">
            <font-awesome-icon
              icon="fa fa-moon"
              class="text-white text-[34px] me-8"
            />
          </div>

          <div class="flex" @click="showLanguage = !showLanguage">
            <div class="text-white text-[41px] me-1">En</div>
            <div class="self-center">
              <font-awesome-icon
                icon="fa fa-caret-down"
                class="text-white text-3xl me-8"
                :class="{ 'rotate-180': showLanguage }"
              />
            </div>
          </div>

          <div
            class="self-center flex"
            @click="
              (showUser = !showUser) && (register = false) && (login = false)
            "
          >
            <div>
              <font-awesome-icon
                icon="fa fa-user"
                class="text-white text-[34px] me-1"
              />
            </div>

            <div>
              <font-awesome-icon
                icon="fa fa-caret-down"
                class="text-white text-3xl"
                :class="{ 'rotate-180': showUser }"
              />
            </div>
          </div>
        </div>
        <div class="md:hidden inline-flex">
          <div class="self-center">
            <font-awesome-icon
              icon="fa fa-bars"
              class="text-white text-[34px] me-8"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showUser"
      class="absolute right-10 bg-blue-400 text-white py-1 hidden md:block"
    >
      <a
        href="#"
        class="block py-1 px-2 border-b border-red-400"
        @click="(login = !login) && (register = false) && (otp = false)"
        >Login</a
      >
      <a
        href="#"
        class="block px-2 py-1 border-b border-red-400"
        @click="(register = !register) && (otp = false) && (login = false)"
        >Register</a
      >
      <a
        href="#"
        class="block px-2 py-1"
        @click="(otp = !otp) && (login = false) && (register = false)"
        >OTP</a
      >
    </div>

    <div
      v-if="showLanguage"
      class="absolute right-40 z-10 px-2 bg-blue-400 text-white hidden md:block"
    >
      <a href="#" class="block px-2 py-1">Arabic</a>
    </div>

    <div
      class="absolute right-32 w-1/4 bg-sky-100 text-white hidden md:block"
      v-if="login"
    >
      <div class="px-4 py-4">
        <label for="email" class="text-blue-900">Email</label>
        <input
          type="email"
          class="h-8 w-full mb-4 rounded-lg focus:outline-blue-500"
        />
        <label for="email" class="text-blue-900">Password</label>
        <input
          type="password"
          class="h-8 w-full mb-4 rounded-lg focus:outline-blue-500"
        />
        <a href="#" class="border-b border-black text-black">Forgot password</a>
      </div>
      <a
        href="#"
        @click="login = false"
        class="block py-3 bg-blue-900 text-center"
        >Login</a
      >
    </div>

    <div
      class="absolute right-32 w-1/4 bg-sky-100 text-white hidden md:block"
      v-if="register"
    >
      <div class="px-4 py-4">
        <label for="email" class="text-blue-900">Email</label>
        <input
          type="email"
          class="h-8 w-full mb-4 rounded-lg focus:outline-blue-500"
        />
        <label for="email" class="text-blue-900">Password</label>
        <input
          type="password"
          class="h-8 w-full mb-4 rounded-lg focus:outline-blue-500"
        />

        <label for="email" class="text-blue-900">Confirm password</label>
        <input
          type="password"
          class="h-8 w-full mb-4 rounded-lg focus:outline-blue-500"
        />
      </div>
      <a
        href="#"
        @click="register = false"
        class="block py-3 bg-blue-900 text-center"
        >Register</a
      >
    </div>

    <div
      class="absolute right-32 w-1/4 bg-sky-100 text-white hidden md:block"
      v-if="otp"
    >
      <div class="text-center mb-8 text-lg text-blue-900 font-semibold">
        OTP
      </div>
      <div class="mb-8 px-4 text-center text-blue-900">
        Please enter the temporary password sent to the email
      </div>
      <div class="flex justify-center px-4 py-4">
        <input
          type="text"
          class="h-20 w-16 mb-4 text-center text-[40px] rounded-lg focus:outline-blue-500 mx-2 text-black"
          maxlength="1"
        />
        <input
          type="text"
          class="h-20 w-16 mb-4 text-center text-[40px] rounded-lg focus:outline-blue-500 mx-2 text-black"
          maxlength="1"
        />
        <input
          type="text"
          class="h-20 w-16 mb-4 text-center text-[40px] rounded-lg focus:outline-blue-500 mx-2 text-black"
          maxlength="1"
        />
        <input
          type="text"
          class="h-20 w-16 mb-4 text-center text-[40px] rounded-lg focus:outline-blue-500 mx-2 text-black"
          maxlength="1"
        />
      </div>
      <div class="text-center mb-4 text-blue-900">
        <a href="#">I didn't receive any number? Send a new number</a>
      </div>
      <a
        href="#"
        @click="otp = false"
        class="block py-3 bg-blue-900 text-center"
        >Confirm</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showUser = ref(false);
const showLanguage = ref(false);
const login = ref(false);
const register = ref(false);
const otp = ref(false);
</script>

<template>
  <div class="relative">
    <div class="bg-[#202F8F] py-4">
      <div class="flex justify-between md:px-20 px-10">
        <div class="w-40">
          <img src="/images/logo.png" alt="" />
        </div>
        <div class="flex self-center hidden md:inline-flex">
          <span class="self-center h-8 w-8 me-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="rotate-45"
            >
              <path
                d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z"
                fill="#fff"
              />
            </svg>
          </span>

          <div class="flex" @click="showLanguage = !showLanguage">
            <div
              class="self-center text-white text-[30px] font-semibold me-1 cursor-pointer"
            >
              En
            </div>
            <span class="self-center h-6 w-6 me-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                :class="{ 'rotate-180': showLanguage }"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  fill="#ffffff"
                />
              </svg>
            </span>
          </div>

          <div
            class="self-center flex"
            @click="
              (showUser = !showUser) && (register = false) && (login = false)
            "
          >
            <span class="self-center h-10 w-10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                  fill="#ffffff"
                />
              </svg>
            </span>

            <span class="self-center h-6 w-6 me-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                :class="{ 'rotate-180': showUser }"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  fill="#ffffff"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="md:hidden inline-flex">
          <div class="w-10 h-10 self-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                fill="#ffffff"
              />
            </svg>
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
        class="block py-1 px-2 border-b border-red-400 cursor-pointer"
        @click="(login = !login) && (register = false) && (otp = false)"
        >Login</a
      >
      <a
        href="#"
        class="block px-2 py-1 border-b border-red-400 cursor-pointer"
        @click="(register = !register) && (otp = false) && (login = false)"
        >Register</a
      >
      <a
        href="#"
        class="block px-2 py-1 cursor-pointer"
        @click="(otp = !otp) && (login = false) && (register = false)"
        :class="{ ' border-b border-red-400': currentRoute !== '/' }"
        >OTP</a
      >
      <a
        v-if="currentRoute !== '/'"
        @click="logoutUser"
        class="block px-2 py-1 cursor-pointer"
        >Logout</a
      >
    </div>

    <div
      v-if="showLanguage"
      class="absolute right-40 z-10 px-2 bg-blue-400 text-white hidden md:block"
    >
      <a href="#" class="block px-2 py-1">Arabic</a>
    </div>

    <form @submit.prevent="loginUser">
      <div
        class="absolute right-32 w-1/4 bg-sky-100 text-white hidden md:block"
        v-if="login"
      >
        <div class="px-4 py-4">
          <label for="email" class="text-blue-900">Email</label>
          <input
            type="email"
            class="h-8 w-full px-2 mb-4 rounded-lg focus:outline-blue-500 bg-white text-black"
            v-model="signinForm.email"
          />
          <label for="email" class="text-blue-900">Password</label>
          <input
            type="password"
            class="h-8 w-full mb-4 px-2 rounded-lg focus:outline-blue-500 bg-white text-black"
            v-model="signinForm.password"
          />
          <a href="#" class="border-b border-black text-black"
            >Forgot password</a
          >
        </div>

        <p class="text-red-500">
          {{ errorMsg }}
        </p>

        <p class="text-green-500">
          {{ successMsg }}
        </p>
        <button class="block w-full py-3 bg-blue-900 text-center" type="submit">
          Login
        </button>
        <!-- 
        <button
          class="block w-full py-3 bg-blue-900 text-center"
          @click="loginWithGithub"
          type="button"
        >
          Login with github
        </button> -->
      </div>
    </form>

    <form @submit.prevent="signUpNewUser">
      <div
        class="absolute right-32 w-1/4 bg-sky-100 text-white hidden md:block"
        v-if="register"
      >
        <div class="px-4 py-4">
          <label for="email" class="text-blue-900">Email</label>
          <input
            type="email"
            class="h-8 w-full mb-4 px-2 rounded-lg focus:outline-blue-500 bg-white text-black"
            v-model="signupForm.email"
          />
          <label for="email" class="text-blue-900">Password</label>
          <input
            type="password"
            class="h-8 w-full mb-4 px-2 rounded-lg focus:outline-blue-500 bg-white text-black"
            v-model="signupForm.password"
          />

          <label for="email" class="text-blue-900">Confirm password</label>
          <input
            type="password"
            class="h-8 w-full mb-4 px-2 rounded-lg focus:outline-blue-500 bg-white text-black"
          />
        </div>
        <p class="text-red-500">
          {{ errorMsg }}
        </p>

        <p class="text-green-500">
          {{ successMsg }}
        </p>
        <button
          href="#"
          class="block w-full py-3 bg-blue-900 text-center"
          type="submit"
        >
          Register
        </button>
        <!-- @click="register = false" -->
      </div>
    </form>

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
// const supabase = useSupabaseClient();
const router = useRouter();

const currentRoute = ref(router.currentRoute.value.fullPath);

const showUser = ref(false);
const showLanguage = ref(false);
const login = ref(false);
const register = ref(false);
const otp = ref(false);

const successMsg = ref(null);
const errorMsg = ref(null);

const signinForm = ref({
  email: "",
  password: "",
});

const signupForm = ref({
  email: "",
  password: "",
});

function signUpNewUser() {
  router.push("/general-information");
  register.value = false;
  // redirectTo: "http://localhost:3000/general-information",
}

function loginUser() {
  router.push("/general-information");
  console.log("calling");
  login.value = false;
}

// async function signUpNewUser() {
//   try {
//     const { data, error } = await supabase.auth.signUp({
//       email: signupForm.value.email,
//       password: signupForm.value.password,
//       options: {
//         redirectTo: "http://localhost:3000/general-information",
//       },
//     });
//     if (error) {
//       throw error;
//     }
//     successMsg.value = "Check your email to check confirm your account.";
//   } catch (error) {
//     errorMsg.value = error.message;
//   }
// }

// async function loginUser() {
//   try {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email: signinForm.value.email,
//       password: signinForm.value.password,
//     });
//     if (error) {
//       throw error;
//     }
//     router.push("/general-information");
//     successMsg.value = "Check your email to check confirm your account.";
//   } catch (error) {
//     errorMsg.value = error.message;
//   }
// }

// async function logoutUser() {
//   try {
//     const { data, error } = await supabase.auth.signOut();
//     if (error) {
//       throw error;
//     }
//     router.push("/");
//     currentRoute.value = "/";
//   } catch (error) {
//     errorMsg.value = error.message;
//   }
// }

// const loginWithGithub = async () => {
//   try {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: "github",
//       callbackUrl: "/auth/callback",
//     });
//     if (error) {
//       throw error;
//     }
//   } catch (error) {
//     errorMsg.value = error.message;
//   }
// };

// const loginWithGithub = async () => {
//   try {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: 'github',
//       callbackUrl: '/auth/callback', // Update this to match your Supabase configuration
//     });

//     if (error) {
//       throw error;
//     }

//     // The code will reach this point only if the authentication is successful
//     router.push("/general-information");
//   } catch (error) {
//     errorMsg.value = error.message;
//   }
// };
</script>

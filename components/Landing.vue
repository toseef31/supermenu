<template>
  <div>
    <div class="py-10">
      <div
        class="bg-[url('/images/Group-812.svg')] h-[400px] md:h-[600px] lg:h-[800px] bg-contain bg-no-repeat bg-center"
      ></div>
    </div>

    <div v-for="item in 7">
      <div
        class="relative py-10 px-20 bg-[#A6ECF7] my-10 h-[150px] xl:h-[300px] flex justify-center"
      >
        <div
          class="absolute left-10 -top-5 bg-[#202F8F] h-10 w-10 xl:-top-10 xl:h-20 xl:w-20 rounded-full"
        ></div>
        <h1
          class="md:text-[45px] lg:text-[60px] xl:text-[112px] text-[25px] font-medium self-center text-[#202F8F]"
        >
          {{ item }} نظام سحابي متكامل
        </h1>
        <div
          class="absolute right-10 -bottom-5 bg-[#202F8F] h-10 w-10 xl:-bottom-10 xl:h-20 xl:w-20 rounded-full"
        ></div>
      </div>

      <div class="text-center py-10">
        <div class="w-3/4 mx-auto">
          <p
            class="mb-0 text-16px md:text-[20px] lg:text-[25px] xl:text-[45px]"
          >
            نعمل بتقنية حديثة وضمان 99.9% عدم خروج النطاق عن الإنترنت ومتوافق مع
            جميع مقاسات الشاشات(جوال,تابلت,كمبيوتر )ونتأكد من عملها بشكل صحيح
            قبل تشغيل الخدمة
          </p>
        </div>
      </div>
    </div>

    <div class="ltr:ml-3 rtl:mr-3">
      <h2>{{ $t("hi") }}</h2>
    </div>

    <NuxtLink
      v-for="locale in locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.code }}
    </NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: "Super Menu",
});
const switchLocalePath = useSwitchLocalePath();
const { locales } = useI18n();
</script>

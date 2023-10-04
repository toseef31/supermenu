<template>
  <div>
    <h1 class="text-red-700">this is index page</h1>

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

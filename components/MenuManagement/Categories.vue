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
  </div>
</template>

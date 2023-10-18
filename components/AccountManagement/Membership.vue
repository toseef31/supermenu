<template>
  <div class="py-12">
    <div class="lg:px-20 md:px-10 mb-12">
      <div class="flex justify-between flex-wrap">
        <div class="mb-10">
          <select class="w-48 border-2 border-blue-900 h-10">
            <option class="w-48 border-1 border-blue-900">option 1</option>
            <option>option 2</option>
            <option>option 3</option>
            <option>option 4</option>
          </select>
        </div>
        <div class="mb-10 flex">
          <p class="me-4 tex-lg font-bold">Membership status</p>
          <div class="">
            <button
              class="rounded-lg h-10 w-24 text-sm font-semibold border border-blue-900 flex justify-center items-center mb-2 hover:bg-gray-100 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Active
            </button>
            <button
              class="h-10 w-24 text-sm font-semibold rounded-lg border border-blue-900 flex justify-center items-center hover:bg-gray-100 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Non active
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-y-16 gap-x-4">
      <div class="lg:col-span-6 col-span-12" v-for="index in 2">
        <div
          class="w-10/12 mx-auto bg-card rounded-lg relative shadow-lg shadow-gray-500/50"
        >
          <div class="text-black py-10 px-6">
            <div class="text-4xl text-blue-900 font-semibold">Some text</div>

            <div
              class="text-3xl text-sky-600 mt-10 mb-6 md:w-3/4 mx-auto"
              v-for="item in 5"
            >
              <div class="flex">
                <img src="/images/check-mark.svg" class="me-8" />
                <div>food discription</div>
              </div>
            </div>

            <div
              class="absolute -top-5 right-0 bg-blue-900 py-6 px-12 rounded-lg text-white text-2xl"
            >
              2500 SR
            </div>

            <div
              class="absolute right-0 left-0 -bottom-6 m-auto py-3 bg-blue-900 text-white w-32 rounded text-center"
            >
              Share now
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

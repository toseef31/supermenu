<template>
  <div>
    <div class="mt-20 lg:px-20 md:px-10">
      <div class="flex">
        <div class="text-blue-900 text-2xl font-semibold mb-10">Add user</div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>plus-circle</title>
            <path
              d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              fill="#ff0000"
            />
          </svg>
        </div>
      </div>

      <div class="lg:w-1/4 md:w-1/2 mb-4">
        <input
          type="url"
          class="h-10 px-2 w-full border-2 rounded-xl focus:outline-blue-900"
          placeholder=""
        />
      </div>

      <div class="lg:w-1/4 md:w-1/2 mb-4">
        <input
          type="url"
          class="h-10 px-2 w-full border-2 rounded-xl focus:outline-blue-900"
          placeholder=""
        />
      </div>

      <div class="lg:w-1/4 md:w-1/2 mb-4">
        <input
          type="url"
          class="h-10 px-2 w-full border-2 rounded-xl focus:outline-blue-900"
          placeholder=""
        />
      </div>
    </div>
  </div>
</template>

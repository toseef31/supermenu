<template>
  <div>
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
          <div class="flex">
            <div class="text-white text-[41px] me-1">En</div>
            <div class="self-center">
              <font-awesome-icon
                icon="fa fa-caret-down"
                class="text-white text-3xl me-8"
              />
            </div>
          </div>
          <div class="self-center flex">
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
  </div>
</template>

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

    <div class="overflow-x-auto">
      <div
        class="grid grid-cols-7 min-h-14 py-2 rounded-lg border-2 mt-12 mb-6 w-full"
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
          <span
            >one ihsdg skjdfh sjhd fwuersbdfsduj k afh sdjhf sjhf gsdj gskjdfg
            jsd gfjsdfgjkhsdogweruhgs</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
table {
  border-collapse: separate;
  border-spacing: 0 15px;
}

tr {
  border: 2px solid red;
}
td {
  width: 150px;
  text-align: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 5px;
  box-shadow: 0 0 4px #54fd43;
}

td:first-child {
  border-left: 1px solid black;
}

td:last-child {
  border-right: 1px solid black;
}
</style>

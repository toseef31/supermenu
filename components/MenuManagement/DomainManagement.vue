<template>
  <div>
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
  </div>
</template>

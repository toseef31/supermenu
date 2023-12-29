<template>
  <div class="">
    <div class="grid grid-cols-1 mb-8 md:ms-16">
      <div class="flex">
        <div
          class="h-[135px] w-[135px] bg-gray-200 rounded-full flex justify-center items-center self-center me-8"
        >
          image
        </div>
        <div class="self-center">
          <div class="text-ms mb-2 font-semibold">welcome back</div>
          <div class="text-2xl mb-2 fornt-bold">User Name</div>
          <div class="text-sm font-semibold">Sunday 17 December 2023</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-y-8 gap-x-4">
      <div class="lg:col-span-4 md:col-span-6 col-span-12" v-for="index in 9">
        <div class="lg:w-3/4 md:w-10/12 mx-auto bg-card rounded-lg">
          <div class="text-black py-10 px-6">
            <div class="flex justify-between">
              <div class="text-[22px] font-semibold">Next occasion</div>
              <div>
                <img src="/images/star.svg" alt="" />
              </div>
            </div>

            <div class="text-3xl text-sky-600 mt-10" v-if="index % 3 !== 0">
              Saudi National Day {{ index }}
            </div>
            
            <div class="flex justify-center" v-if="index % 3 === 0">
              <div
                role="progressbar"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
                style="--value: 65"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-card {
  background-image: url("/images/card-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@keyframes growProgressBar {
  0%,
  33% {
    --pgPercentage: 0;
  }
  100% {
    --pgPercentage: var(--value);
  }
}

@property --pgPercentage {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}

div[role="progressbar"] {
  --size: 6rem;
  --fg: #369;
  --bg: #def;
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(
      closest-side,
      white 90%,
      transparent 0 99.9%,
      white 0
    ),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

div[role="progressbar"]::before {
  counter-reset: percentage var(--value);
  content: counter(percentage) "%";
}
</style>

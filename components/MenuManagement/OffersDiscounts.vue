<template>
    <div class="md:px-6">
       
        <div class="grid grid-cols-12 gap-2 mb-20">
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
            <div class="py-4 px-8 border">Display name</div>
            </div>
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border cursor-pointer" @click="showDropdown()">Display type</div>
                <div v-if="showIt">
                    <div class="py-4 px-8 border flex justify-between">
                        <label for="permanent" class="cursor-pointer">Permanent</label>
                        <input type="radio" id="permanent" name="time">
                    </div>
                    <div class="py-4 px-8 border flex justify-between">
                        <label for="temprary" class="cursor-pointer">Temprary</label>
                        <input type="radio" id="temprary" name="time">
                    </div>
                </div>

            </div>
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border">Start date</div>
                    <VCalendar v-model="date" />
            </div>
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border">End date</div>
                    <VDatePicker v-model="date" :attributes="attrs" />
            </div>
        </div>

        <div class="grid grid-cols-12 gap-2 mb-20">
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
            <div class="py-4 px-8 border">Display name</div>
            </div>
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border cursor-pointer" @click="showDropdown()">Display type</div>
                <div v-if="showIt">
                    <div class="py-4 px-8 border flex justify-between">
                        <label for="permanent" class="cursor-pointer">Permanent</label>
                        <input type="radio" id="permanent" name="time">
                    </div>
                    <div class="py-4 px-8 border flex justify-between">
                        <label for="temprary" class="cursor-pointer">Temprary</label>
                        <input type="radio" id="temprary" name="time">
                    </div>
                </div>

            </div>
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border">Start date</div>
                    <VDatePicker v-model="date" mode="time" />
            </div>
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border">End date</div>
                <div>
                    <VDatePicker v-model="date" mode="time" />
                </div>
            </div>
        </div>

        <div class="border-b py-6">
            <div class="flex">
                <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                <div class="self-center font-semibold">Saturday</div>
            </div>
</div>
            
        <div class="border-b py-6">
            <div class="flex">
                <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                <div class="self-center font-semibold">Sunday</div>
            </div>
            </div>
            
        <div class="border-b py-6">
            <div class="flex">
                <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                <div class="self-center font-semibold">Monday</div>
            </div>
            </div>
            
        <div class="border-b py-6">
            <div class="flex">
                <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                <div class="self-center font-semibold">Tuesday</div>
            </div>
            </div>
            
        <div class="border-b py-6">
            <div class="flex">
                <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                <div class="self-center font-semibold"  >Wednesday</div>
            </div>
            </div>
            
        <div class="border-b py-6">
            <div class="flex">
                <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                <div class="self-center font-semibold">Thursday</div>
            </div>
            </div>
            
        <div class="border-b py-6">
            <div class="flex">
                <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                <div class="self-center font-semibold">Friday</div>
            </div>
            </div>
        </div>
 
</template>

<script setup>
import {ref} from 'vue'
const showIt = ref(false);

const date = ref(new Date())
console.log('what is date',date)
  const attrs = ref([
    {
      key: 'today',
      highlight: {
        color: 'red',
        fillMode: 'solid'
      },
      dates: new Date()
    }
  ])

const showDropdown = () => {
    showIt.value =  !showIt.value;
}
</script>
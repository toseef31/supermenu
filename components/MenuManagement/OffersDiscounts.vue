<template>
    <div class="md:px-6">
        <div class="font-bold text-center text-2xl mb-10">
            There are no offers
        </div>
        <div class="grid grid-cols-12 gap-2 mb-6">
            <div class="col-span-12 md:col-span-6 lg:col-span-3 ">
                <div class="py-4 px-8 border w-3/4 flex justify-between">
                   <div>
                     Create a new view
                   </div>
                   <div class="h-6 w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path 
                        d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" 
                        fill="#aaaaaa"
                        /></svg>
                   </div>
                </div>
            </div>
        </div>
       
        <div class="grid grid-cols-12 gap-2 mb-20">
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
            <div class="py-4 px-8 border">Display name</div>
            </div>
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border cursor-pointer" @click="showDropdown()">Display type</div>
                <!-- <div v-if="isType"> -->
                    <div class="py-4 px-8 border flex justify-between">
                        <label for="permanent" class="cursor-pointer">Permanent</label>
                        <input type="radio" id="permanent" name="time">
                    </div>
                    <div class="py-4 px-8 border flex justify-between">
                        <label for="temprary" class="cursor-pointer">Temprary</label>
                        <input type="radio" id="temprary" name="time">
                    </div>
                <!-- </div> -->
            </div>
            <!-- <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border cursor-pointer" @click="isStartDate = !isStartDate">Start date</div>
                <div v-if="isStartDate">
                    <VCalendar v-model="date" />
                </div>
            </div>
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border cursor-pointer" @click="isEndDate = !isEndDate">End date</div>
                <div v-if="isEndDate">
                    <VDatePicker v-model="date" :attributes="attrs" />
                </div>
            </div> -->
        </div>
        <!-- 
        <div class="grid grid-cols-12 gap-2 mb-20">
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
            <div class="py-4 px-8 border">Display name</div>
            </div>
            <div class="lg:col-span-3 md:col-span-6 col-span-12">
                <div class="py-4 px-8 border cursor-pointer" @click="showDropdown()">Display type</div>
                <div v-if="isType">
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
        </div> -->

        <div >
            <table class="w-full border-separate border-spacing-2">
                <tr class="border py-6 px-4">
                    <td>
                        <div class="flex">
                            <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                            <div class="self-center font-semibold">Saturday</div>
                         </div>
                    </td>
                    <td>
                        <div class="relative">
                            <div class="py-4 px-8 border cursor-pointer" @click="showDropdown()">Display type</div>
                            <div v-if="isType" class="absolute">
                                <div class="py-4 px-8 border flex justify-between bg-white">
                                    <label for="permanent" class="cursor-pointer">Permanent</label>
                                    <input type="radio" id="permanent" name="time">
                                </div>
                                <div class="py-4 px-8 border flex justify-between bg-white">
                                    <label for="temprary" class="cursor-pointer">Temprary</label>
                                    <input type="radio" id="temprary" name="time">
                                </div> 
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="relative">
                            <div class="py-4 px-8 border cursor-pointer" @click="isEndDate = !isEndDate">Start date</div>
                            <div v-if="isEndDate" class="absolute">
                                <VDatePicker v-model="date" mode="time" :attributes="attrs" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="relative">
                            <div class="py-4 px-8 border cursor-pointer" @click="isEndDate = !isEndDate">End date</div>
                            <div v-if="isEndDate" class="absolute">
                                <VDatePicker v-model="date" mode="time" :attributes="attrs" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center">
                            <div class="w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>floppy</title><path
                                    d="M5,3A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5.5L18.5,3H17V9A1,1 0 0,1 16,10H8A1,1 0 0,1 7,9V3H5M12,4V9H15V4H12M7,12H17A1,1 0 0,1 18,13V19H6V13A1,1 0 0,1 7,12Z" 
                                    fill="#aaaaaa"
                                    /></svg>
                            </div>
                            <div class="w-6 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-edit-outline</title><path 
                                    d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" 
                                    fill="#aaaaaa"
                                    /></svg>
                            </div>
                            <div class="w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clipboard-remove-outline</title><path 
                                    d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M19 19H5V5H7V7H17V5H19V19M15.54 10.88L13.41 13L15.54 15.12L14.12 16.54L12 14.41L9.88 16.54L8.47 15.12L10.59 13L8.47 10.88L9.88 9.47L12 11.59L14.12 9.47L15.54 10.88Z"
                                    fill="#aaaaaa"
                                    /></svg>
                            </div>
                        </div> 
                    </td>
                </tr>

                <tr class="border py-6 px-4">
                    <td>
                        <div class="flex">
                            <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                            <div class="self-center font-semibold">Saturday</div>
                         </div>
                    </td>
                    <td>
                        <div class="relative">
                            <div class="py-4 px-8 border cursor-pointer" @click="showDropdown()">Display type</div>
                            <div v-if="isType" class="absolute">
                                <div class="py-4 px-8 border flex justify-between bg-white">
                                    <label for="permanent" class="cursor-pointer">Permanent</label>
                                    <input type="radio" id="permanent" name="time">
                                </div>
                                <div class="py-4 px-8 border flex justify-between bg-white">
                                    <label for="temprary" class="cursor-pointer">Temprary</label>
                                    <input type="radio" id="temprary" name="time">
                                </div> 
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="relative">
                            <div class="py-4 px-8 border cursor-pointer" @click="isEndDate = !isEndDate">Start date</div>
                            <div v-if="isEndDate" class="absolute">
                                <VDatePicker v-model="date" mode="time" :attributes="attrs" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="relative">
                            <div class="py-4 px-8 border cursor-pointer" @click="isEndDate = !isEndDate">End date</div>
                            <div v-if="isEndDate" class="absolute">
                                <VDatePicker v-model="date" mode="time" :attributes="attrs" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center">
                            <div class="w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>floppy</title><path
                                    d="M5,3A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5.5L18.5,3H17V9A1,1 0 0,1 16,10H8A1,1 0 0,1 7,9V3H5M12,4V9H15V4H12M7,12H17A1,1 0 0,1 18,13V19H6V13A1,1 0 0,1 7,12Z" 
                                    fill="#aaaaaa"
                                    /></svg>
                            </div>
                            <div class="w-6 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-edit-outline</title><path 
                                    d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" 
                                    fill="#aaaaaa"
                                    /></svg>
                            </div>
                            <div class="w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clipboard-remove-outline</title><path 
                                    d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M19 19H5V5H7V7H17V5H19V19M15.54 10.88L13.41 13L15.54 15.12L14.12 16.54L12 14.41L9.88 16.54L8.47 15.12L10.59 13L8.47 10.88L9.88 9.47L12 11.59L14.12 9.47L15.54 10.88Z"
                                    fill="#aaaaaa"
                                    /></svg>
                            </div>
                        </div> 
                    </td>
                </tr>
                
            </table>
        </div>

        <!-- <div class="border py-6 px-4">
            <div class="flex justify-between">
                <div class="flex">
                    <div class="me-4 self-center"><img src="/images/check-mark.svg"  alt="check"></div>
                    <div class="self-center font-semibold">Saturday</div>
                </div>
                <div class="relative">
                    <div class="py-4 px-8 border cursor-pointer" @click="showDropdown()">Display type</div>
                    <div v-if="isType" class="absolute">
                        <div class="py-4 px-8 border flex justify-between bg-white">
                            <label for="permanent" class="cursor-pointer">Permanent</label>
                            <input type="radio" id="permanent" name="time">
                        </div>
                        <div class="py-4 px-8 border flex justify-between bg-white">
                            <label for="temprary" class="cursor-pointer">Temprary</label>
                            <input type="radio" id="temprary" name="time">
                        </div> 
                    </div>
                </div>
                <div class="relative">
                    <div class="py-4 px-8 border cursor-pointer" @click="isEndDate = !isEndDate">Start date</div>
                    <div v-if="isEndDate" class="absolute">
                        <VDatePicker v-model="time" :attributes="attrs" />
                    </div>
                </div>
                <div class="relative">
                    <div class="py-4 px-8 border cursor-pointer" @click="isEndDate = !isEndDate">End date</div>
                    <div v-if="isEndDate" class="absolute">
                        <VDatePicker v-model="time" :attributes="attrs" />
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>floppy</title><path
                            d="M5,3A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5.5L18.5,3H17V9A1,1 0 0,1 16,10H8A1,1 0 0,1 7,9V3H5M12,4V9H15V4H12M7,12H17A1,1 0 0,1 18,13V19H6V13A1,1 0 0,1 7,12Z" 
                            fill="#aaaaaa"
                            /></svg>
                    </div>
                    <div class="w-6 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-edit-outline</title><path 
                            d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" 
                            fill="#aaaaaa"
                            /></svg>
                    </div>
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clipboard-remove-outline</title><path 
                            d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M19 19H5V5H7V7H17V5H19V19M15.54 10.88L13.41 13L15.54 15.12L14.12 16.54L12 14.41L9.88 16.54L8.47 15.12L10.59 13L8.47 10.88L9.88 9.47L12 11.59L14.12 9.47L15.54 10.88Z"
                            fill="#aaaaaa"
                            /></svg>
                    </div>
                </div>
            </div>
        </div> -->
            
    </div>
 
</template>

<style scoped> 

table {
  /* width: 100%;
  border-collapse: separate;
  border-spacing: 0 16px; */
  border-radius: 13px;
  padding: 0px 3px;
  border: none;
}

tr {
  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.13);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.13);
  border-radius: 13px !important;
}

td {
  text-align: center;
  padding: 18px 16px;

}


</style>

<script setup>
import {ref} from 'vue'
const isType = ref(false);


const isStartDate = ref(false);
const isEndDate = ref(false);

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
    isType.value =  !isType.value;
}
</script>
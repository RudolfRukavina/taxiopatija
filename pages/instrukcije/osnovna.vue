<template>
  <div
    class="min-h-[90vh] dark:ring-white/10 ring-primary/5 bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-blue-200 to-90% shadow-xl items-center flex flex-col p-8 w-full bg-white">

    <!-- <div class="relative flex items-center gap-x-4 ">
      <img
        src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
        alt="" class="h-10 w-10 rounded-full ring-1 ring-primary/5">
      <div class="text-lg leading-6">
        <p class="font-semibold text-4xl text-primary "> <a href="#"> <span class="absolute inset-0"></span>
            Instrukcije
          </a> </p>
        <h2 class="text-zinc-500 text-2xl">
          za osnovnu školu
        </h2>
      </div>
    </div> -->



    <div class=''>


      <div class="relative overflow-x-auto shadow-md rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 text-center text-2xl">
                Osnovna škola
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='item in osnovna'
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-1 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ item.title }}
              </th>
            </tr>
          </tbody>
        </table>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class=" py-3 text-base text-center">
                Instrukcije
              </th>
              <th scope="col" class="py-3 text-center">
                / školski sat
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Individualno
              </th>
              <td class="px-6 py-4 font-bold">
                10,00 €
              </td>
            </tr>
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Grupno
              </th>
              <td class="px-6 py-4 font-bold">
                7,50 €
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"

  const osnovna = ref([
    {
      title: "Matematika",
    },
    {
      title: "Fizika",
    },
    {
      title: "Kemija",
    },
    {
      title: "Biologija",
    },
    {
      title: "Hrvatski jezik",
    },
    {
      title: "Engleski jezik",
    },
    {
      title: "Informatika",
    },
    {
      title: "Povijest",
    },
    {
      title: "Geografija",
    },
    {
      title: "Tehnička kultura",
    },

  ])
</script>
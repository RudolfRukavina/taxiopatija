<template>
  <div
    class="min-h-[90vh] dark:ring-white/10 ring-primary/5 bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-blue-200 to-90% shadow-xl items-center flex flex-col p-8 w-full bg-white">
    <!--
    <div class="relative flex items-center gap-x-4 ">
      <img
        src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
        alt="" class="h-10 w-10 rounded-full ring-1 ring-primary/5">
      <div class="text-lg leading-6">
        <p class="font-semibold text-4xl text-primary "> <a href="#"> <span class="absolute inset-0"></span>
            Tečaj
          </a> </p>
        <h2 class="text-zinc-500 text-2xl">
          stranog jezika
        </h2>
      </div>
    </div> -->



    <div class=''>


      <div class="relative overflow-x-auto shadow-md rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 text-center text-2xl">
                Strani jezik
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='item in jezici'
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row"
                class="px-6 py-1 text-lg text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ item.title }}
              </th>
            </tr>
          </tbody>
        </table>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class=" py-3 text-base text-center">
                15,00 €
              </th>
              <th scope="col" class="text-center py-3">
                školski sat
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <li class="mt-1 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-base">Ukoliko upišete 20 i više sati
        tečaja stranog jezika odobravamo <span class='font-bold text-base'>20% popusta</span>.</li>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"

  const jezici = ref([
    {
      title: "Engleski",
    },
    {
      title: "Njemački",
    },
    {
      title: "Talijanski",
    },
  ])
</script>
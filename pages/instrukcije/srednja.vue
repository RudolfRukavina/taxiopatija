<template>
  <div
    class="pt-24 dark:ring-white/10 ring-primary/5 bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-blue-200 to-90% shadow-xl items-center flex flex-col p-8 w-full bg-white">
    <NuxtLink to="/" class='absolute left-0  top-14 mx-5 text-3xl rounded-xl px-3 p-5'><i class=" fa fa-chevron-left"></i>
    </NuxtLink>
    <a href="tel:+385917865619" class='absolute right-0  top-14 mx-5 text-3xl rounded-xl px-3 p-5'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    </a>
    <div class="relative flex items-center gap-x-4 ">
      <img
        src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
        alt="" class="h-10 w-10 rounded-full ring-1 ring-primary/5">
      <div class="text-lg leading-6">
        <p class="font-semibold text-4xl text-primary "> <a href="#"> <span class="absolute inset-0"></span>
            Instrukcije
          </a> </p>
        <h2 class="text-zinc-500 text-2xl">
          za srednju školu
        </h2>
      </div>
    </div>



    <div class='pt-10'>


      <div class="relative overflow-x-auto shadow-md rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 text-center text-2xl">
                Srednja škola
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='item in srednja'
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
              <th scope="col" class="px-6 py-3 text-base">
                Instrukcije
              </th>
              <th scope="col" class="px-6 py-3">
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
                11,00 €
              </td>
            </tr>
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Grupno
              </th>
              <td class="px-6 py-4 font-bold">
                8,00 €
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

  const srednja = ref([
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
    {
      title: "Računovodstvo",
    },
    {
      title: "Ekonomija",
    },


  ])
</script>
<template>
  <div
    class="min-h-[90vh] dark:ring-white/10 ring-primary/5 bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-blue-200 to-90% shadow-xl items-center flex flex-col p-8 w-full bg-white">

    <div class="relative flex items-center gap-x-4 ">
      <img
        src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
        alt="" class="h-10 w-10 rounded-full ring-1 ring-primary/5">
      <div class="text-lg leading-6">
        <p class="font-semibold text-4xl text-primary "> <a href="#"> <span class="absolute inset-0"></span>
            Poduke Parallel
          </a> </p>
        <h2 class="text-zinc-500 text-2xl">
          Ostale usluge
        </h2>
      </div>
    </div>



    <div class=' '>
      <div>
        <NuxtLink to="/usluge/seminar"
          class="inline-flex justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
          role="alert">
          <span class="text-md px-5 py-1 font-bold">Pomoć u pisanju seminara</span>
          <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/usluge/natjecanja"
          class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
          role="alert">
          <span class="text-md px-5 py-1 font-bold">Priprema za natjecanja</span>
          <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </div>
      <div>
        <RouterLink to="/usluge/organizacija"
          class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
          role="alert">
          <span class="text-md px-5 py-1 font-bold">Organizacija seminara</span>
          <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
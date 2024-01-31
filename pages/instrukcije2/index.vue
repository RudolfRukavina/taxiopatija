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
          Instrukcije
        </h2>
      </div>
    </div>




    <div class='mt-10 w-full'>
      <div class="flex justify-center my-3 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <NuxtLink to='/instrukcije/osnovna'
          class="inline-flex justify-between items-center py-3 px-5 text-xl font-medium  w-full max-w-md text-center rounded-lg border border-gray-300 bg-slate-800 text-white hover:bg-slate-900 focus:ring-4 focus:ring-gray-100  box-shadow1">

          Osnovna škola
          <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </div>
      <div class="flex justify-center my-3 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <NuxtLink to='/instrukcije/srednja'
          class="inline-flex justify-between items-center py-3 px-5 text-xl font-medium  w-full max-w-md text-center rounded-lg border border-gray-300 bg-slate-800 text-white hover:bg-slate-900 focus:ring-4 focus:ring-gray-100  box-shadow1">

          Srednja škola
          <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </div>
      <div class="flex justify-center my-3 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <NuxtLink to='/instrukcije/fakultet'
          class="inline-flex justify-between items-center py-3 px-5 text-xl font-medium  w-full max-w-md text-center rounded-lg border border-gray-300 bg-slate-800 text-white hover:bg-slate-900 focus:ring-4 focus:ring-gray-100  box-shadow1">

          Fakultet
          <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
<template>
  <div
    class="pt-24 h-[95vh] dark:ring-white/10 ring-primary/5 bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-blue-200 to-90% shadow-xl items-center flex flex-col p-8 w-full bg-white">
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
            Poduke Parallel
          </a> </p>
        <h2 class="text-zinc-500 text-2xl">
          Instrukcije
        </h2>
      </div>
    </div>



    <div class='pt-10'>
      <div>
        <RouterLink to="/instrukcije/osnovna"
          class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
          role="alert">
          <span class="text-md px-5 py-1 font-bold">Osnovna škola</span>
          <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/instrukcije/srednja"
          class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
          role="alert">
          <span class="text-md px-5 py-1 font-bold">Srednja škola</span>
          <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/instrukcije/fakultet"
          class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
          role="alert">
          <span class="text-md px-5 py-1 font-bold">Fakultet</span>
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
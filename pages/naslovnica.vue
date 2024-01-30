<template>
  <section class="bg-slate-500 min-h-[99vh]">
    <div class="max-w-screen-xl px-4 py-2 mx-auto">
      <div class="flex items-center justify-evenly">
        <!-- <ul class="flex flex-row font-medium mt-0 space-x-4 rtl:space-x-reverse text-sm">
          <li>
            <RouterLink to='/' :class="$route.path === '/' ? 'font-bold' : ''" class="text-gray-900  hover:underline"
              aria-current="page">Naslovnica</RouterLink>
          </li>
          <li>
            <RouterLink to='/onama' :class="$route.path === '/onama' ? 'font-bold' : ''"
              class="text-gray-900 hover:underline">
              O nama</RouterLink>
          </li>

        </ul> -->


      </div>

    </div>
    <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <NuxtLink to='/mojepripreme'
        class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-white  shadow rounded-full   "
        role="alert">
        <span class="text-xs bg-primary-600 rounded-full px-4 py-1.5 mr-3">Aktualno</span> <span
          class="text-sm font-bold">Moje pripreme za maturu</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </NuxtLink>
      <h1
        class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-slate-100 drop-shadow-xl [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)] md:text-5xl lg:text-6xl ">
        Poduke Parallel</h1>
      <p class="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 xl:px-48 ">
        Unaprijedite svoje učenje kroz naše iskustvo, poticaj i konstantnu podršku.
      </p>
      <div class="flex justify-center mb-6 lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <NuxtLink to='/onama'
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 bg-slate-100 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100  shadow">

          O nama
          <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </div>
      <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div>
          <NuxtLink to='/pripreme'
            class="inline-flex w-72 justify-between items-center py-1 px-1 pr-4 mb-3 text-sm text-gray-700 bg-white  shadow rounded-full   "
            role="alert"> <span class="text-md px-5 py-1 font-bold">Pripreme za državnu maturu</span>
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to='/instrukcije'
            class="inline-flex w-72 justify-between items-center py-1 px-1 pr-4 mb-3 text-sm text-gray-700 bg-white  shadow rounded-full   "
            role="alert"> <span class="text-md px-5 py-1 font-bold">Instrukcije</span>
          </NuxtLink>
        </div>
        <div
          class="ring-1 dark:ring-white/10 ring-primary/5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col px-4 py-2 my-4 mx-4 h-full bg-white  dark:bg-secondary">
          <div class=" flex justify-between items-center w-full gap-x-4">
            <div class='flex items-center'>
              <img
                src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
                alt="parallellogo" class="h-6 w-6 rounded-full inline-block mx-3 ring-1 ring-primary/5">
              <div class="text-lg leading-6 inline-block">
                <p class="text-xl text-primary ">
                  <NuxtLink to="/instrukcije"> <span class="absolute inset-0"></span>
                    Instrukcije
                  </NuxtLink>
                </p>

              </div>
            </div>
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </div>

        </div>
        <div>
          <NuxtLink to='/seminari'
            class="inline-flex w-72 justify-between items-center py-1 px-1 pr-4 mb-3 text-sm text-gray-700 bg-white  shadow rounded-full   "
            role="alert"> <span class="text-md px-5 py-1 font-bold">Pomoć u pisanju seminara</span>
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to='/natjecanja'
            class="inline-flex w-72 justify-between items-center py-1 px-1 pr-4 mb-3 text-sm text-gray-700 bg-white  shadow rounded-full   "
            role="alert"> <span class="text-md px-5 py-1 font-bold">Priprema za natjecanja</span>
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to='/organizacija'
            class="inline-flex w-72 justify-between items-center py-1 px-1 pr-4 mb-3 text-sm text-gray-700 bg-white  shadow rounded-full   "
            role="alert"> <span class="text-md px-5 py-1 font-bold">Organizacija seminara</span>
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

</script>

<style scoped>
.bg {
  background: rgb(1, 236, 154);
  background: linear-gradient(180deg, rgb(90, 211, 255) 18%, rgba(193, 255, 127, 0.574) 80%);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
}
</style>


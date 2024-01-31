<template>
  <div class=' lg:pt-0'>
    <div>
      <NuxtLink to="/instrukcije/osnovna"
        class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
        role="alert">
        <span class="text-md px-5 py-1 font-bold">Osnovna škola</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/instrukcije/srednja"
        class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
        role="alert">
        <span class="text-md px-5 py-1 font-bold">Srednja škola</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/instrukcije/fakultet"
        class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
        role="alert">
        <span class="text-md px-5 py-1 font-bold">Fakultet</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/instrukcije/jezik"
        class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
        role="alert">
        <span class="text-md px-5 py-1 font-bold">Tečaj stranog jezika</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>



  <div class="pt-5">
    <div class="text-center font-semibold">
      <h2 class="text-3xl">
        <span class="text-blue-700 tracking-wide">Moje </span>
        <span>pripreme za državnu maturu</span>
      </h2>
      <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
        Uspješno savladajte gradivo neophodno za polaganje državne mature!
      </p>
    </div>
    <div class="pt-5 flex flex-row blur-[0.5px]">

      <!-- StartUp Card -->
      <div to='/mojepripreme' class="min-w-full p-6 bg-gray-900 text-center  text-white border-4 shadow-xl border-white">

        <div>
          <h3 class="text-white font-semibold text-2xl">Kreiraj svoj plan!</h3>

          <hr class="mt-4 border-1 border-gray-600">
          <p class="pt-2 tracking-wide">

            <span class="text-3xl font-semibold">0</span>
            <span class="text-gray-400 align-top">€</span>
            <span class="text-gray-400 font-medium">/ 0 školskih sati</span>
          </p>
          <p class="mt-1 text-[12px] text-zinc-500 dark:text-zinc-400 font-light lg:text-base">Primjenjeno
            <span class='font-bold'>0% popusta </span>.
          </p>
        </div>

        <hr class="mt-4 border-1 border-gray-600">

        <div class="mt-5">
          <p class="font-semibold cursor-pointer text-gray-400 text-left flex justify-between py-2">
            <span class="material-icons align-middle">
              Matematika
            </span>
            <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
          </p>

          <p class="font-semibold text-gray-400 text-left  flex justify-between cursor-pointer py-2">
            <span class="material-icons align-middle">
              Engleski
            </span>
            <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
          </p>
          <p class="font-semibold text-gray-400 text-left  flex justify-between cursor-pointer py-2">
            <span class="material-icons align-middle">
              Hrvatski
            </span>
            <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
          </p>
          <p class="font-semibold text-gray-400 text-left  flex justify-between cursor-pointer py-2">
            <span class="material-icons align-middle">
              Fizika
            </span>
            <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
          </p>
          <p class="font-semibold text-gray-400 text-left flex justify-between cursor-pointer py-2">
            <span class="material-icons align-middle">
              Kemija
            </span>
            <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
          </p>


        </div>
      </div>


    </div>

  </div>


  <li class="mt-1 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-base underline">Moguće je obročno
    plaćanje paketa
    priprema za državnu maturu.</li>
  <li class="mt-1 text-[12px] text-zinc-500 dark:text-zinc-400 font-light lg:text-base">Ukoliko upišete pripreme za
    državnu maturu iz dva predmeta odobravamo <span class='font-bold'> 10% popusta</span>.</li>
  <li class="mt-1 text-[12px] text-zinc-500 dark:text-zinc-400 font-light lg:text-base">Ukoliko upišete pripreme za
    državnu maturu iz tri ili više predmeta odobravamo <span class='font-bold lg:text-lg'> 20% popusta</span>.</li>


  <div
    class=" lg:row-start-2 lg:row-span-1 items-center h-full flex p-3 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative  overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
    <div id="carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->

      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/380892954_334349485821452_4074856091470605192_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=oT9quv1hQRoAX9cadPJ&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCULMCtWDND6SBK2NENdESIdJm5hcinCwpG2aRyJB-Ofg&oe=65BBE538"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/374572073_320649660524768_3665922957013428077_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=AxvHd16acgwAX8gkqWO&_nc_ht=scontent.fzag3-1.fna&oh=00_AfByLhkUSzEBtSYMKkuUg9VmhhYD3pdhaK5tVCxZOaL8fA&oe=65BD5D74"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/343646101_1460008451402789_8388681347473877191_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=3IIo_9Vu544AX8ydA5G&_nc_ht=scontent.fzag3-1.fna&oh=00_AfAHu6YYxt_w9jAmRZaea3t8fUeJflmYLhhIK5b8eyr1bA&oe=65BC25AB"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/308998411_181876414402094_1583496055882924302_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=3SYT37t15OMAX8usnvE&_nc_ht=scontent.fzag3-1.fna&oh=00_AfATJFNIEyzFj_BXbBuGCEZ5tGTNvqFP4DXzzVTvlBoCFw&oe=65BC2A9B"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272268092_113057891271813_5228490678392803109_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=bxA5Hh4T6ckAX88V2Gs&_nc_ht=scontent.fzag3-1.fna&oh=00_AfARCAqb2ZR2XX9J9MuI7ssMLAWAP-QfWNL0bCGxH56x4Q&oe=65BDCC55"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
      </div>
      <!-- Slider indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
          data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
          data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
          data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
          data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
          data-carousel-slide-to="4"></button>
      </div>
      <!-- Slider controls -->
      <button type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

  </div>


  <div class='mt-3 '>
    <div>
      <NuxtLink to="/usluge/seminar"
        class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
        role="alert">
        <span class="text-sm px-5 py-1 font-bold">Pomoć u pisanju seminara</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </NuxtLink>
    </div>
    <div>
      <RouterLink to="/usluge/natjecanja"
        class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
        role="alert">
        <span class="text-sm px-5 py-1 font-bold">Priprema za natjecanja</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/usluge/organizacija"
        class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
        role="alert">
        <span class="text-sm px-5 py-1 font-bold">Organizacija seminara</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </RouterLink>
    </div>
  </div>

  <div
    class=" lg:row-start-3 lg:row-span-1 items-center h-full flex p-3 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative  overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->

      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/273116862_116521864258749_1651446924869170264_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=VRa3VgIGQFUAX9CSttF&_nc_ht=scontent.fzag3-1.fna&oh=00_AfARO3uncVADV2lhiC-1Vzi4D-Qng5RgzDLyaL0OxWCKUQ&oe=65BB3A50"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272964922_116521874258748_3108660647323063802_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=fghuPyr15YcAX_DlzZH&_nc_ht=scontent.fzag3-1.fna&oh=00_AfD_4Ldxt096nVXlW0gIPUlMhELwarJ_IuJ1-MJEapUVhg&oe=65BB3C04"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272925225_116521867592082_7492078064058286627_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=pgDuup2XYm8AX8QBpCi&_nc_ht=scontent.fzag3-1.fna&oh=00_AfDnjzkuZOH6mz9rY257x9xajPjcCE2dCO0CpUNdfgezIA&oe=65BB259F"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272993083_116521877592081_2988084878874185271_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=cCq7HeHvuyEAX9ybFhX&_nc_ht=scontent.fzag3-1.fna&oh=00_AfAvXGaustVvu2_A247xiTu0GQVNnkGdB7Oa-MqZUSECTg&oe=65BC0FC5"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/273039287_116521870925415_4001426306569107080_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=JgVIpJO3LAcAX-R8R_9&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCJJsXF6oC7rCNgFBWWF0mcr36oUpdn-UnQpnijjL3mJQ&oe=65BBEC07"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="...">
        </div>
      </div>
      <!-- Slider indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
          data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
          data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
          data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
          data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
          data-carousel-slide-to="4"></button>
      </div>
      <!-- Slider controls -->
      <button type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

  </div>


  <div
    class="lg:col-span-2 bg-gradient-to-t from-indigo-100 from-10% via-sky-100 via-30% to-emerald-50 to-90% xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2  dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick  p-8">
    <span class="font-bold text-xl  uppercase">Svi Programi</span>
    <div class='grid grid-cols-2 text-xs p-5 rounded-xl'>
      <div class='flex justify-start bg-white shadow rounded-lg p-2 m-1 overflow-hidden items-start'
        v-for='       item        in        programi       '>

        <p class=''>{{ item }}</p>
      </div>
    </div>
  </div>

  <div
    class=" dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick  p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary">
    <p class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">
      Iskustva
    </p>


    <div class="flex items-center mb-2">
      <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
        viewBox="0 0 22 20">
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
        viewBox="0 0 22 20">
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
        viewBox="0 0 22 20">
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
        viewBox="0 0 22 20">
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
        viewBox="0 0 22 20">
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
      <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
      <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
    </div>
    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">9 global ratings</p>
    <div class="flex items-center mt-4">
      <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5 star</a>
      <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style="width: 100%"></div>
      </div>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">100%</span>
    </div>
    <div class="flex items-center mt-4">
      <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4 star</a>
      <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style="width: 0%"></div>
      </div>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">0%</span>
    </div>
    <div class="flex items-center mt-4">
      <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">3 star</a>
      <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style="width: 0%"></div>
      </div>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">0%</span>
    </div>
    <div class="flex items-center mt-4">
      <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2 star</a>
      <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style="width: 0%"></div>
      </div>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">0%</span>
    </div>
    <div class="flex items-center mt-4">
      <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1 star</a>
      <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style="width: 0%"></div>
      </div>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">0%</span>
    </div>

    <div class="md:grid md:grid-cols-2 gap-2 lg:grid-cols-1">
      <div class="mt-4">
        <p class="text-sm text-pink-500 dark:text-pink-400">
          "Dijete je koristilo instrukcije iz hrvatskog jezika. Sve mu je lijepo objašnjeno. Jako smo zadovoljni."
        </p>
        <p class="text-xs mt-2 text-zinc-500"> <span class="block text-xs">Andrea</span> </p>
      </div>
      <div class="mt-4">
        <p class="text-sm text-orange-500 dark:text-orange-300">
          "Bio i blago rečeno, bio sam oduševljen! Mlada i entuzijastična ekipa koja gura i radi izvrstan posao.
          Topla
          preporuka! Hvala još jednom instruktoru Ivanu na podukama :)"
        </p>
        <p class="text-xs mt-2 text-zinc-500"> <span class="block text-xs">Edin Secerkadic</span> </p>
      </div>
    </div>
  </div>

  <div
    class=" bg-gradient-to-t from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90% dark:ring-white/10 ring-primary/5 flex flex-col p-[1px] h-full justify-center items-center  overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
    <iframe class=''
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.0537294724686!2d14.43512127666443!3d45.32753747107204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a145207c24cd%3A0xd7bcff68c9f35013!2sParallel!5e0!3m2!1sen!2shr!4v1706194910244!5m2!1sen!2shr%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade%22%3E%3C/iframe%3E"
      width="100%" height="100%" style="border:0;" allowfullscreen="" loading="async"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <table class="max-w-sm border-2 border-slate-800 text-sm text-left rtl:text-right text-gray-500 ">
    <thead class="text-xs  text-white uppercase bg-slate-800 ">
      <tr>
        <th scope="col" class="px-6 py-3">
          Državna Matura
        </th>
        <th scope="col" class="px-6 py-3">
          Broj školskih sati
        </th>
        <th scope="col" class="px-6 py-3">
          Cijena
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for='item in programimature'
        @click='addToCart(item)'>

        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class=''>
            {{ item.title }}
          </p>
          <p class='p-0 m-0'>
            {{ item.razina }}
          </p>

        </th>
        <td class="px-6 py-4">
          {{ item.brojSati }}
        </td>
        <td class="px-6 py-4 text-nowrap whitespace-nowrap">
          {{ item.cijena }} €
        </td>
      </tr>


    </tbody>
  </table>
  <section
    class="lg:row-span-2  dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick  p-8">
    <section class="bg-white">
      <div class="container px-6 mx-auto">
        <div class="text-center">
          <p class="font-medium text-blue-500 dark:text-blue-400">Kontakt</p>

          <h3 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Kontaktirajte nas!</h3>

          <p class="mt-3 text-gray-500 dark:text-gray-400">Za bilo kakva pitanja ili usluge, slobodno nas
            kontaktirajte nas na broj telefona ili e-mail.</p>
        </div>

        <div class="grid grid-cols-1 mt-10">



          <div class="flex flex-col items-center justify-center text-center">
            <a href="tel:+385917865619" class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>

            <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Telefon</h2>
            <p class="mt-2 text-gray-500 dark:text-gray-400">Nazovite nas!</p>
            <a href="tel:+385917865619" class="mt-2 text-blue-500 dark:text-blue-400">+385917865619</a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-0 px-4 mx-auto max-w-screen-md">
        <p class="mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">ili nam pošaljite
          e-mail!</p>
        <form action="#" class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vaš
              e-mail</label>
            <input type="email" id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required>
          </div>
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Predmet</label>
            <input type="text" id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="" required>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Vaša
              poruka</label>
            <textarea id="message" rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Poštovani, zainteresiran/a sam ..."></textarea>
          </div>
          <button type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-black bg-gray-200 border border-gray-300 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pošalji
          </button>
        </form>
      </div>
    </section>
  </section>
</template>
<template>
  <!-- <nav id="navbar" ref='navbarRef'
    class="bg-gradient-to-t from-indigo-100 from-10% via-sky-50 via-30% to-emerald-50 to-90% flex shadow-2xl overflow-x-scroll">
    <div class="px-4 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 rtl:space-x-reverse text-md text-nowrap whitespace-nowrap">
          <li>
            <NuxtLink to="/" class="link-item" aria-current="page">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Naslovnica
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/instrukcije" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Instrukcije
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/mojepripreme" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Moje pripreme
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ostaleusluge" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Ostale usluge
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/kontakt" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Kontakt
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/iskustva" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Iskustva
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/programi" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Svi programi
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  <!-- <header
    class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-slate-500 text-white shadow-xl text-nowrap whitespace-nowrap text-sm py-4 sm:py-0 ">
    <nav class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
      <div class="relative sm:flex sm:items-center">
        <div class="flex items-center justify-between">
          <NuxtLink to='/' class="flex items-center text-nowrap whitespace-nowrap text-xl font-semibold dark:text-white">
            <img
              src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
              alt="" class="h-9 w-9 rounded-full shadow-xl inline-block me-3 ring-1 ring-primary/5">
            <h1
              class=" text-2xl font-extrabold tracking-tight leading-none text-slate-100 drop-shadow-xl [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)]  lg:text-4xl ">
              Poduke Parallel</h1>
            <div class="text-lg leading-6 inline-block items-center">
              <p class="font-medium text-3xl text-primary  ">

              </p>

            </div>
          </NuxtLink>
          <div class="sm:hidden">

            <button type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-basic-usage" aria-controls="navbar-basic-usage" aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div id="navbar-basic-usage"
          class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
          <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <NuxtLink to='/naslovnica'
              class="font-medium  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Naslovnica</NuxtLink>
            <NuxtLink to='/' class="font-medium  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Sve</NuxtLink>

            <NuxtLink to='/onama'
              class="font-medium text-gray-50 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              O nama</NuxtLink>
            <NuxtLink to='/mojepripreme'
              class="font-medium text-gray-50 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Pripreme za državnu maturu</NuxtLink>
            <div class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]">
              <button type="button"
                class="sm:py-4 flex items-center w-full text-gray-50 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Instrukcije
                <svg class="ms-2 flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-1/2 hidden z-10 top-full start-1/2  bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute">
                <div class="sm:grid sm:grid-cols-1">
                  <div class="flex flex-col">
                    <NuxtLink to='/instrukcije/osnovna'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Osnovna škola
                    </NuxtLink>
                    <NuxtLink to='/instrukcije/srednja'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Srednja škola
                    </NuxtLink>
                    <NuxtLink to='/instrukcije/fakultet'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Fakultet
                    </NuxtLink>
                    <NuxtLink to='/instrukcije/jezik'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Tečaj stranog jezika
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>


            <div class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]">
              <button type="button"
                class="sm:py-4 flex items-center w-full text-gray-50 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Ostale usluge
                <svg class="ms-2 flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-1/2 hidden z-10 top-full start-1/2  bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute">
                <div class="sm:grid sm:grid-cols-1">
                  <div class="flex flex-col">
                    <NuxtLink to='/usluge/seminar'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Pomoć u pisanju seminara
                    </NuxtLink>
                    <NuxtLink to='/usluge/seminar'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Pomoć u pisanju projekata
                    </NuxtLink>
                    <NuxtLink to='/usluge/seminar'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Pomoć u pisanju lektira
                    </NuxtLink>
                    <NuxtLink to='/usluge/seminar'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Pomoć u pisanju zadaća
                    </NuxtLink>
                    <NuxtLink to='/usluge/natjecanja'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Priprema za natjecanja
                    </NuxtLink>
                    <NuxtLink to='/usluge/organizacija'
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Organizacija seminara
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <a href="tel:+385917865619" class="font-medium text-gray-50 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500
                  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Nazovite nas!</a>

          </div>
        </div>
      </div>
    </nav>
  </header> -->



  <nav class="gradient border-gray-200">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <NuxtLink :to="{ path: '/', hash: '#top' }" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
          alt="" class="h-9 w-9 rounded-full shadow-xl inline-block me-3 ring-1 ring-primary/5">
        <h1
          class=" text-2xl font-extrabold tracking-tight leading-none text-slate-100 drop-shadow-xl [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)]  lg:text-4xl ">
          Poduke Parallel</h1>
      </NuxtLink>
      <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <a href="tel:+385917865619" class="text-2xl px-5  text-white hover:underline"><i class='fa fa-phone'></i></a>
      </div>
    </div>
  </nav>
  <nav class="bg-white shadow-xl overflow-x-auto text-nowrap whitespace-nowrap px-5">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <li>
            <NuxtLink :to="{ path: '/', hash: '#top' }" class="text-gray-900  hover:underline">Naslovnica
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#usluge' }" class="text-gray-900  hover:underline">Usluge
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to='/onama' class="text-gray-900  hover:underline">O nama
            </NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to='/mojepripreme' class="text-gray-900  hover:underline">Pripreme za državnu maturu
            </NuxtLink>
          </li> -->
          <!-- <li>
            <button id="dropdownNavbarLinkInstrukcije" data-dropdown-toggle="dropdownNavbarInstrukcije"
              class="flex items-center justify-between w-full  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Instrukcije
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg></button>

            <div id="dropdownNavbarInstrukcije"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <NuxtLink to="/instrukcije/osnovna"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Za
                    osnovnu školu</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/instrukcije/srednja"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Za
                    srednju školu</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/instrukcije/fakultet"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Za
                    fakultet</NuxtLink>
                </li>
              </ul>
              <div class="py-1">
                <NuxtLink to="/instrukcije/jezik"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Tečaj
                  stranog jezika</NuxtLink>
              </div>
            </div>
          </li> -->
          <!-- <li>
            <button id="dropdownNavbarLinkUsluge" data-dropdown-toggle="dropdownNavbarUsluge"
              class="flex items-center justify-between w-full  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Ostale
              usluge
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg></button>

            <div id="dropdownNavbarUsluge"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <NuxtLink to='/usluge/seminari'
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Seminari
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to='/usluge/pisanje'
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Pomoć
                    u pisanju</NuxtLink>
                </li>
                <li>
                  <NuxtLink to='/usluge/natjecanja'
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Priprema za
                    natjecanja</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/usluge/organizacija"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Organizacija
                    seminara
                  </NuxtLink>
                </li>
              </ul>

            </div>
          </li> -->
          <li>
            <button id="dropdownNavbarLinkKontakt" data-dropdown-toggle="dropdownNavbarKontakt"
              class="flex items-center justify-between w-full  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent pe-5">Kontakt

              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg></button>

            <div id="dropdownNavbarKontakt"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="mailto:poduke@parallel.hr"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i
                      class='fa fa-envelope'> poduke@parallel.hr</i></a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/9dFa9f6sUkVuHxRD9" target='_blank'
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i
                      class='fa fa-map-marker'> Riva
                      20, Rijeka</i></a>
                </li>
                <li>
                  <a href="tel:+385917865619"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i
                      class='fa fa-phone'>+385917865619</i></a>
                </li>

              </ul>
              <div class="py-1">
                <a href="https://www.facebook.com/poduke.parallel" target='_blank'
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i
                    class='fa fa-facebook'>acebook</i></a>
                <a href="https://www.instagram.com/poduke.parallel" target='_blank'
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i
                    class='fa fa-instagram'> Instragram</i></a>
              </div>
              <div class="py-1">
                <NuxtLink :to="{ path: '/', hash: '#radnovrijeme' }"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  <i class='fa fa-calendar'> Radno
                    vrijeme</i>
                </NuxtLink>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from "vue"
  import { onMounted } from 'vue'
  import {
    initAccordions,
    initCarousels,
    initCollapses,
    initDials,
    initDismisses,
    initDrawers,
    initDropdowns,
    initModals,
    initPopovers,
    initTabs,
    initTooltips
  } from 'flowbite'

  // initialize components based on data attribute selectors
  onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
  })

</script>

<style scoped>
.router-link-exact-active {
  color: rgb(28, 28, 28);
  font-weight: 600;
}

.gradient {
  background: linear-gradient(90deg, #143b52 0%, #133518 100%);
}
</style>


<template>
  <div class="p-4 bg-gradient-to-b from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
    <div class="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 ">
      <div
        class="lg:row-span-2 ring-1  ring-primary/5 bg-white  shadow-xl  rounded-3xl p-8 bg-gradient-to-t from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
        <div class="relative flex items-center gap-x-4">
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
            alt="" class="h-10 w-10 rounded-full ring-1 ring-primary/5">
          <div class="text-lg leading-6">
            <p class="font-semibold text-3xl text-primary "> <a href="#"> <span class="absolute inset-0"></span>
                Poduke Parallel
              </a> </p>
            <p class="text-zinc-500 dark:text-zinc-400">
              O nama
            </p>
          </div>
        </div>
        <p class="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
          Dobrodošli u poduke Parallel!
        </p>
        <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
          Unaprijedite svoje učenje kroz naše iskustvo, poticaj i konstantnu podršku.
          <br> <br>
          Mi smo tim 4 studenta...
        </p>
      </div>

      <div
        class="ring-1 dark:ring-white/10 ring-primary/5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
        <div class="max-w-full">
          <p class="text-4xl font-normal tracking-tight text-primary dark:text-white lg:text-6xl">
            Instrukcije
          </p>
        </div>

        <div class='mt-3 '>
          <div>
            <RouterLink to="/osnovna"
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
            <RouterLink to="/srednja"
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
            <RouterLink to="/fakultet"
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
      <div
        class="ring-1 bg-gradient-to-b from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90% lg:row-span-2 flex flex-col group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
        <div class=" flex justify-center items-center ">
          <div class="pt-5">
            <div class="text-center font-semibold">
              <h1 class="text-3xl">
                <span class="text-blue-700 tracking-wide">Moje </span>
                <span>pripreme za državnu maturu</span>
              </h1>
              <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
                Uspješno savladajte gradivo neophodno za polaganje državne mature!
              </p>
            </div>
            <div class="pt-5 flex flex-row">

              <!-- StartUp Card -->
              <div class="min-w-full p-6 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white">

                <div>
                  <h1 class="text-white font-semibold text-2xl">Kreiraj svoj plan!</h1>
                  <p class="pt-2 tracking-wide">

                    <span class="text-3xl font-semibold">0</span>
                    <span class="text-gray-400 align-top">€</span>
                    <span class="text-gray-400 font-medium">/ 0 školskih sati</span>
                  </p>
                </div>
                <div v-if='selectedPriprema'>
                  <div class=" bg-transparent ">
                    <table
                      class="w-full text-sm fixed bottom-0 z-40 left-0 text-left  text-gray-500 border bg-gray-50 box-shadow1 ">
                      <thead class="text-xs text-gray-400 uppercase bg-gray-900 border w-full ">
                        <tr>
                          <th scope="col" class="px-6 text-lg py-2">
                            {{ selectedPriprema.naslov }}
                          </th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr class=" bg-white border-b " v-for='program in selectedPriprema.programi'>
                          <th scope=" row" class="px-6 py-2 text-lg font-medium text-gray-900 ">
                            <img
                              src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
                              alt="" class="h-6 w-6 rounded-full ring-1 ring-primary/5 inline-block">
                            <p class='inline-block mx-1'>{{ program.ime }}</p>
                            <p class='text-gray-600 text-md'> {{ program.brojSati }}</p>
                          </th>
                          <td class="px-4 text-end py-2 text-nowrap text-lg">
                            {{ program.cijena }} €
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
                <hr class="mt-4 border-1 border-gray-600">
                <div class="pt-8">
                  <p class="font-semibold cursor-pointer text-gray-400 text-left flex justify-between"
                    @click='selectedPriprema = pripreme[0]'>
                    <span class="material-icons align-middle">
                      Matematika
                    </span>
                    <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
                  </p>

                  <p class="font-semibold text-gray-400 text-left pt-5 flex justify-between"
                    @click='selectedPriprema = pripreme[1]'>
                    <span class="material-icons align-middle">
                      Engleski
                    </span>
                    <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
                  </p>
                  <p class="font-semibold text-gray-400 text-left pt-5 flex justify-between"
                    @click='selectedPriprema = pripreme[2]'>
                    <span class="material-icons align-middle">
                      Hrvatski
                    </span>
                    <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
                  </p>
                  <p class="font-semibold text-gray-400 text-left pt-5 flex justify-between"
                    @click='selectedPriprema = pripreme[3]'>
                    <span class="material-icons align-middle">
                      Fizika
                    </span>
                    <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
                  </p>
                  <p class="font-semibold text-gray-400 text-left pt-5 flex justify-between"
                    @click='selectedPriprema = pripreme[4]'>
                    <span class="material-icons align-middle">
                      Kemija
                    </span>
                    <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
                  </p>


                </div>
              </div>


            </div>
          </div>
        </div>
        <!-- <div class='mt-3 grid justify-center'>
          <div>
            <RouterLink to="/matematika"
              class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
              role="alert">
              <span class="text-lg px-5 py-1 font-bold">Matematika</span>
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/engleski"
              class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
              role="alert">
              <span class="text-lg px-5 py-1 font-bold">Engleski</span>
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/hrvatski"
              class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
              role="alert">
              <span class="text-lg px-5 py-1 font-bold">Hrvatski</span>
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/hrvatski"
              class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
              role="alert">
              <span class="text-lg px-5 py-1 font-bold">Fizika</span>
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/kemija"
              class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
              role="alert">
              <span class="text-lg px-5 py-1 font-bold">Kemija</span>
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </RouterLink>
          </div>
        </div> -->

        <!-- <div>
          <p class="text-2xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
            Pripreme za državnu maturu
          </p>
          <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Uspješno savladajte gradivo neophodno za polaganje državne mature!
          </p>
        </div> -->


        <!-- <div class="relative bg-transparent ">
          <table class="w-full text-sm text-left mt-2 rtl:text-right text-gray-500 border bg-gray-50 box-shadow1 "
            v-for='priprema in pripreme'>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 border w-full ">
              <tr>
                <th scope="col" class="px-6 text-lg py-2">
                  {{ priprema.naslov }}
                </th>

              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b " v-for='program in priprema.programi'>
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 ">
                  {{ program.ime }}
                  <p class='text-gray-600'> {{ program.brojSati }}</p>
                </th>
                <td class="px-4 text-end py-2 text-nowrap text-md">
                  {{ program.cijena }} €
                </td>
              </tr>

            </tbody>
          </table>
        </div> -->

        <!-- <div class='grid grid-cols-1 lg:grid-cols-2 gap-4 text-center mt-3'>
          <div class='border border-black shadow-sm rounded-md bg-sky-50  '
            v-for='(priprema, pripremaIndex) in        pripreme       '>
            <p class=' font-medium rounded-t-lg border-b border-black shadow-md text-2xl py-2 bg-white text-black '>
              {{
                priprema.naslov
              }}</p>
            <div
              class='grid grid-cols-2 p-1 bg-gradient-to-t from-gray-200 from-10% via-gray-100 via-30% to-gray-200 to-90% rounded-b-lg'>
              <li class='bg-white border border-gray-500 rounded-md m-1 hover:bg-gray-100 hover:shadow-md'
                :class='program.style' v-for='(program, programIndex) in        priprema.programi       '>
                <div class="flex p-2 rounded  ">
                  <div class="flex items-center h-5">
                    <input :id="'helper-radio-' + pripremaIndex + '-' + programIndex"
                      :name="'helper-radio-' + pripremaIndex" type="radio" :value="programIndex"
                      v-model="priprema.selectedProgram"
                      class="w-4 h-4 text-blue-600 bg-blue-100 border-blue-300 focus:ring-blue-500  focus:ring-2 ">
                  </div>
                  <div class="ms-2 text-lg">
                    <label :for="'helper-radio-' + pripremaIndex + '-' + programIndex" class="font-medium text-gray-900 ">
                      <div>{{ program.ime }}</div>
                      <p :id="'helper-radio-text-' + pripremaIndex + '-' + programIndex"
                        class="text-xs font-normal text-gray-500 ">
                        {{ program.brojSati }}</p>

                    </label>
                  </div>
                </div>
                <div class=' text-center text-slate-900 w-full text-md bg-white rounded-b'>
                  {{ program.cijena }} €
                </div>
              </li>
            </div>
          </div>
          <div class="text-center mt-3">
            Total Price: {{ totalSelectedPrice }} €
          </div>
        </div> -->
      </div>
      <div
        class="ring-1 dark:ring-white/10 ring-primary/5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
        <div class="w-full">
          <p class="text-4xl font-normal tracking-tight text-primary dark:text-white lg:text-6xl">
            Ostale usluge
          </p>
        </div>

        <div class='mt-3 '>
          <div>
            <RouterLink to="/pomocsseminarom"
              class="inline-flex w-72 justify-between items-center py-2 px-1 pr-4 mb-3 text-md text-gray-700 bg-white shadow rounded-full"
              role="alert">
              <span class="text-sm px-5 py-1 font-bold">Pomoć u pisanju seminara</span>
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/natjecanja"
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
            <RouterLink to="/organizacija"
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
      </div>
      <div
        class="ring-1 lg:row-start-3 items-center h-full flex p-6 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
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
      <section
        class="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
        <section class="bg-white">
          <div class="container px-6 mx-auto">
            <div class="text-center">
              <p class="font-medium text-blue-500 dark:text-blue-400">Kontakt</p>

              <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Upiši se!</h1>

              <p class="mt-3 text-gray-500 dark:text-gray-400">Za bilo kakva pitanja ili usluge, slobodno nas
                kontaktirajte nas na broj telefona ili e-mail.</p>
            </div>

            <div class="grid grid-cols-1 mt-10">



              <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Telefon</h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Nazovite nas!</p>
                <p class="mt-2 text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
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
                <label for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Predmet</label>
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
      <!-- Section: Design Block -->


      <div
        class="ring-1 bg-gradient-to-t from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90% dark:ring-white/10 ring-primary/5 flex flex-col p-[1px] h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
        <iframe class='rounded-3xl'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.0537294724686!2d14.43512127666443!3d45.32753747107204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a145207c24cd%3A0xd7bcff68c9f35013!2sParallel!5e0!3m2!1sen!2shr!4v1706194910244!5m2!1sen!2shr%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade%22%3E%3C/iframe%3E"
          width="100%" height="100%" style="border:0;" allowfullscreen="" loading="async"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div
        class="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary">
        <p class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">
          Iskustva
        </p>


        <div class="flex items-center mb-2">
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
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
        class="lg:col-span-2 bg-gradient-to-t from-indigo-100 from-10% via-sky-100 via-30% to-emerald-50 to-90% xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
        <span class="font-bold text-xl  uppercase">Svi Programi</span>
        <div class='grid grid-cols-2 text-xs p-5 rounded-xl'>
          <div class='flex justify-start bg-white shadow rounded-lg p-2 m-1 overflow-hidden items-start'
            v-for='       item        in        programi       '>

            <p class=''>{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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

  const selectedPriprema = ref()

  const pripreme = ref([
    {
      selectedProgram: null,
      naslov: "Matematika",
      programi: [
        {
          ime: "Ubrzani program - A razina",
          brojSati: "35 školskih sati",
          cijena: 200,
          style: "col-span-2",
          isActive: false,
        },
        {
          ime: "A razina",
          brojSati: "70 školskih sati",
          cijena: 390,
          isActive: false,
        },
        {
          ime: "B razina",
          brojSati: "50 školskih sati",
          cijena: 280,
          isActive: false,
        }]
    },

    {
      selectedProgram: null,
      naslov: "Engleski",
      programi: [
        {
          ime: "A razina",
          brojSati: "40 školskih sati",
          cijena: 240,
          isActive: false,
        },
        {
          ime: "B razina",
          brojSati: "30 školskih sati",
          cijena: 180,
          isActive: false,
        },
      ]
    },
    {
      selectedProgram: null,
      naslov: "Hrvatski",
      programi: [
        {
          ime: "Hrvatski",
          brojSati: "60 školskih sati",
          cijena: 340,
          style: "col-span-2",
          isActive: false,
        }
      ]
    },
    {
      selectedProgram: null,
      naslov: "Fizika",
      programi: [
        {
          ime: "Ubrzani program - Fizika",
          brojSati: "30 školskih sati",
          cijena: 180,
          style: "col-span-2",
          isActive: false,
        },
        {
          ime: "Fizika",
          brojSati: "60 školskih sati",
          cijena: 340,
          style: "col-span-2",
          isActive: false,
        }

      ]
    },
    {
      selectedProgram: null,
      naslov: "Kemija",
      programi: [
        {
          ime: "Ubrzani program - Kemija",
          brojSati: "30 školskih sati",
          cijena: 180,
          style: "col-span-2",
          isActive: false,
        },
        {
          ime: "Kemija",
          brojSati: "60 školskih sati",
          cijena: 340,
          style: "col-span-2",
          isActive: false,
        }
      ]
    },
  ])



  const programi = [
    "Matematika",
    "Fizika",
    "Kemija",
    "Biologija",
    "Hrvatski jezik",
    "Engleski jezik",
    "Informatika",
    "Povijest",
    "Geografija",
    "Tehnička kultura",
    "Statistika",
    "Programiranje",
    "Osnove elektrotehnike",
    "Računalstvo",
    "Mjerenja u elektrotehnici",
    "Uvod u elektroniku",
    "Elektronika",
    "Elektrotehnika",
    "Opća i anorganska kemija",
    "Organska kemija",
    "Analitička kemija",
    "Biokemija",
    "Fizikalna kemija",
    "Mikrobiologija",
    "Stabilnost broda",
    "Poznavanje broda",
    "Rukovanje teretom",
    "Astronomska navigacija",
    "Terestrička navigacija",
    "Elektronička navigacija",
    "Brodski strojevi i uređaji",
    "Tehnička mehanika",
    "Termodinamika",
    "Robotika",
    "Industrijska automatizacija",
    "Regulacija i upravljanje",
  ]

  const matematika = ref([
    {
      ime: "Matematika A razina",
      brojSati: "70 školskih sati",
      cijena: 390,
      isActive: false,
    },
    {
      ime: "Matematika B razina",
      brojSati: "50 školskih sati",
      cijena: 280,
      isActive: false,
    },
    {
      ime: "Matematika A razina",
      brojSati: "35 školskih sati",
      fast: "Ubrzani program",
      cijena: 200,
      isActive: false,
    },
  ])

  const engleski = ref([
    {
      ime: "Engleski A razina",
      brojSati: "40 školskih sati",
      cijena: 240,
      isActive: false,
    },
    {
      ime: "Engleski B razina",
      brojSati: "30 školskih sati",
      cijena: 180,
      isActive: false,
    },
  ])

  const hrvatski = ref([
    {
      ime: "Hrvatski",
      brojSati: "60 školskih sati",
      cijena: 340,
      isActive: false,
    },
  ])

  const fizika = ref([
    {
      ime: "Fizika",
      brojSati: "60 školskih sati",
      cijena: 340,
      isActive: false,
    },
    {
      ime: "Fizika",
      brojSati: "30 školskih sati",
      fast: "Ubrzani program",
      cijena: 180,
      isActive: false,
    },
  ])

  const kemija = ref([
    {
      ime: "Kemija",
      brojSati: "60 školskih sati",
      cijena: 340,
      isActive: false,
    },
    {
      ime: "Kemija",
      brojSati: "30 školskih sati",
      fast: "Ubrzani program",
      cijena: 180,
      isActive: false,
    },
  ])
</script>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");

ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  display: flex;
}

.parallelline {
  list-style: none;
}

.parallelline a {
  display: block;
  position: relative;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 40px;
  text-align: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.851);

  transition: 0.5s;
}

.parallelline a span {
  position: absolute;
  transition: transform 0.5s;
}

.parallelline a span:nth-child(1),
.parallelline a span:nth-child(3) {
  width: 100%;
  height: 3px;
  background: rgb(17, 17, 17)
}

.parallelline a span:nth-child(1) {
  top: 0;
  left: 0;
  transform-origin: right;
}

.parallelline a:hover span:nth-child(1) {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s;
}

.parallelline a span:nth-child(3) {
  bottom: 0;
  left: 0;
  transform-origin: left;
}

.parallelline a:hover span:nth-child(3) {
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
}

.parallelline a span:nth-child(2),
.parallelline a span:nth-child(4) {
  width: 3px;
  height: 100%;
  background: #404040;
}

.parallelline a span:nth-child(2) {
  top: 0;
  left: 0;
  transform: scale(0);
  transform-origin: bottom;
}

.parallelline a:hover span:nth-child(2) {
  transform: scale(1);
  transform-origin: top;
  transition: transform 0.5s;
}

.parallelline a span:nth-child(4) {
  top: 0;
  right: 0;
  transform: scale(0);
  transform-origin: top;
}

.parallelline a:hover span:nth-child(4) {
  transform: scale(1);
  transform-origin: bottom;
  transition: transform 0.5s;
}

.facebook:hover {
  color: #3b5998;
}

.facebook:hover span {
  background: #3b5998;
}

.phone:hover {
  color: #3d983b;
}

.phone:hover span {
  background: #3d983b;
}

.twitter:hover {
  color: #1da1f2;
}

.twitter:hover span {
  background: #1da1f2;
}

.instagram:hover {
  color: #c32aa3;
}

.instagram:hover span {
  background: #c32aa3;
}

.google:hover {
  color: #dd4b39;
}

.google:hover span {
  background: #dd4b39;
}

ul li a .twitter {
  color: #1da1f2;
}

ul li a:hover:nth-child(3) {
  color: #c32aa3;
}

ul li a:hover:nth-child(4) {
  color: #dd4b39;
}



.box-shadow1 {
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
}
</style>
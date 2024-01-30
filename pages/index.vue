<template>
  <div>

    <Head>
      <Title>Parallel Poduke - Unaprijedite svoje učenje.</Title>
      <Meta name="description" content="Bez puno muke uz Parallel Poduke " />
      <Style type="text/css" />
    </Head>

  </div>
  <div class=" bg-gradient-to-b from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
    <div class=" ">
      <div
        class="lg:row-span-1   ring-primary/5 bg-white  shadow-xl  px-8 py-3 bg-gradient-to-t from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">

        <p class="text-3xl mt-6 text-center font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
          Dobrodošli u poduke Parallel!
        </p>
        <p class="mt-4 text-sm text-zinc-500 text-center dark:text-zinc-400 font-light lg:text-xl">
          Unaprijedite svoje učenje kroz naše iskustvo, poticaj i konstantnu podršku.
          <br> <br>
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
      </div>

      <div
        class=" bg-gradient-to-b from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90% border m-1 hover:underline flex flex-col group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2  p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
        <div class="relative flex justify-center mx-5 items-center gap-x-4">
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
            alt="parallellogo" class="h-10 w-10 rounded-full  ring-primary/5">
          <div class="text-lg leading-6">
            <p class="font-semibold text-3xl text-primary ">
              <NuxtLink to="/mojepripreme"> <span class="absolute inset-0"></span>
                Pripreme za državnu maturu
              </NuxtLink>
            </p>

          </div>
        </div>
        <NuxtLink to="/mojepripreme" class=" flex justify-center items-center ">


        </NuxtLink>
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
        class="  bg-gradient-to-t from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%  justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
        <div class="relative flex justify-center items-center gap-x-4">
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
            alt="parallellogo" class="h-10 w-10 rounded-full  ring-primary/5">
          <div class="text-lg leading-6">
            <p class="font-semibold text-3xl text-primary ">
              <NuxtLink to="/instrukcije"> <span class="absolute inset-0"></span>
                Instrukcije
              </NuxtLink>
            </p>

          </div>
        </div>


      </div>


      <div
        class=" dark:ring-white/10 ring-primary/5 bg-gradient-to-b from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90% border m-1 justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
        <div class="relative flex justify-center items-center gap-x-4">
          <img
            src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
            alt="parallellogo" class="h-10 w-10 rounded-full  ring-primary/5">
          <div class="text-lg leading-6">
            <p class="font-semibold text-3xl text-primary ">
              <NuxtLink to="/ostaleusluge"> <span class="absolute inset-0"></span>
                Ostale usluge
              </NuxtLink>
            </p>

          </div>
        </div>


      </div>


      <!-- Section: Design Block -->





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


  useHead({
    title: 'Poduke Parallel',
    meta: [
      { name: 'description', content: 'Učenje bez muke, uz Parallel poduke!' }
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }]
  })

  useSeoMeta({
    title: 'Poduke Parallel',
    ogTitle: 'Poduke Parallel',
    description: 'Učenje bez muke, uz Parallel poduke!',
    ogDescription: 'Učenje bez muke, uz Parallel poduke!',
    ogImage: 'https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272268092_113057891271813_5228490678392803109_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=bxA5Hh4T6ckAX88V2Gs&_nc_ht=scontent.fzag3-1.fna&oh=00_AfARCAqb2ZR2XX9J9MuI7ssMLAWAP-QfWNL0bCGxH56x4Q&oe=65BDCC55',
    twitterCard: 'summary_large_image',
  })

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
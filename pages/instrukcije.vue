<template>
  <Head>
    <Title>Instrukcije | Poduke Parallel</Title>
    <Meta name="description" content="Bez puno muke, uz Parallel poduke! Održavamo instrukcije iz svih obaveznih i velikog broja stručnih
            predmeta!" />
    <Style type="text/css" />
  </Head>

  <body class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif;">

    <div class="py-10 mx-1" id='naslovnica'>
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <p class=" tracking-loose w-full">Bez puno muke, uz Parallel poduke!</p>
          <h1 class="mb-4  text-5xl lg:text-6xl font-bold leading-tight w-full">
            Instrukcije
          </h1>
          <p class="leading-normal text-lg mb-8">
            Održavamo instrukcije iz svih obaveznih i velikog broja stručnih
            predmeta!
          </p>
          <NuxtLink to="#cjenik"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Cjenik
          </NuxtLink>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-2/5 py-6 text-center">
          <!-- <img class="w-full md:w-4/5 z-50"
          src="" /> -->



          <div id="default-carousel" class="relative w-full rounded-xl " data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-96 overflow-hidden rounded-lg md:h-[580px]">
              <!-- Item 1 -->
              <div class="hidden duration-700 ease-in-out rounded-xl" data-carousel-item>
                <img src="../assets/img/osnovnaskola.jpeg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl" alt="...">
              </div>
              <!-- Item 2 -->
              <div class="hidden duration-700 ease-in-out rounded-xl" data-carousel-item>
                <img src="../assets/img/srednjaskola.jpeg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl" alt="...">
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-700 ease-in-out rounded-xl" data-carousel-item>
                <img src="../assets/img/fakultet.jpeg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl" alt="...">
              </div>
              <div class="hidden duration-700 ease-in-out rounded-xl" data-carousel-item>
                <img src="../assets/img/ucionica.jpeg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl" alt="...">
              </div>
              <div class="hidden duration-700 ease-in-out rounded-xl" data-carousel-item>
                <img src="../assets/img/malaucionica.jpeg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl" alt="...">
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
      </div>
    </div>
    <div class="relative -mt-12 lg:-mt-24">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"></path>
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
            </path>
          </g>
        </g>
      </svg>
    </div>
    <section class="bg-white py-8 -my-[1px]" id='cjenik'>
      <div class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Cjenik
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="" id='osnovnaskola'>
          <div class="w-full  p-6 pb-1">
            <h3 class="text-3xl w-full flex justify-center text-gray-800 font-bold leading-none mb-3">
              Osnovna škola
            </h3>
            <p class="text-gray-600 flex justify-center mb-1">
              Instrukcije za osnovnu školu

            </p>
          </div>
          <div class="w-full flex justify-center p-1 px-5">
            <table class="max-w-md w-full text-sm text-left rtl:text-right border-2 text-gray-500 border-slate-800">
              <thead class="text-xs text-white uppercase bg-slate-900 ">
                <tr>
                  <th scope="col" class=" py-3 text-base text-start px-6">
                    Instrukcije
                  </th>
                  <th scope="col" class="py-3 text-start px-6">
                    školski sat
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
                    10,00 €
                  </td>
                </tr>
                <tr
                  class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Grupno
                  </th>
                  <td class="px-6 py-4 font-bold">
                    7,50 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class=" " id='srednjaskola'>
          <div class="w-full  p-6 pb-1">
            <h3 class="text-3xl w-full flex justify-center text-gray-800 font-bold leading-none mb-3">
              Srednja škola
            </h3>
            <p class="text-gray-600 flex justify-center mb-1">
              Instrukcije za srednju školu

            </p>
          </div>
          <div class="w-full flex justify-center p-1 px-5">
            <table class="max-w-md w-full text-sm text-left rtl:text-right border-2 text-gray-500 border-slate-800">
              <thead class="text-xs text-white uppercase bg-slate-900 ">
                <tr>
                  <th scope="col" class=" py-3 text-base text-start px-6">
                    Instrukcije
                  </th>
                  <th scope="col" class="py-3 text-start px-6">
                    školski sat
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

        <div class=" " id='fakultet'>
          <div class="w-full  p-6 pb-1">
            <h3 class="text-3xl w-full flex justify-center text-gray-800 font-bold leading-none mb-3">
              Fakultet
            </h3>
            <p class="text-gray-600 flex justify-center mb-1">
              Instrukcije za fakultet

            </p>
          </div>
          <div class="w-full flex justify-center p-1 px-5">
            <table class="max-w-md w-full text-sm text-left rtl:text-right border-2 text-gray-500 border-slate-800">
              <thead class="text-xs text-white uppercase bg-slate-900 ">
                <tr>
                  <th scope="col" class=" py-3 text-base text-start px-6">
                    Instrukcije
                  </th>
                  <th scope="col" class="py-3 text-start px-6">
                    školski sat
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
                    15,00 €
                  </td>
                </tr>
                <tr
                  class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Grupno
                  </th>
                  <td class="px-6 py-4 font-bold">
                    11,00 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>




      </div>
    </section>
    <div class="relative -mt-[1px]">
      <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g class="wave" fill="#ffffff">
              <path
                d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z">
              </path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <section class="container mx-auto text-center py-6 pb-10">
      <h2 class="w-full my-2 text-xl lg:text-3xl font-bold leading-tight text-center text-white">
        ✏️ Osnovna škola, bez puno bola!
      </h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-white w-2/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h2 class="w-full my-2 text-xl lg:text-3xl font-bold leading-tight text-center text-white">
        📚 Srednja škola, uz nas je ocjena bolja!
      </h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-white w-2/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h2 class="w-full my-2 text-lg lg:text-3xl font-bold leading-tight text-center text-white">
        💻 Fakultet, Fakultet, znanje nam širi svijet!

      </h2>

      <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-white w-2/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 class="my-4 text-xl px-3 leading-tight">
        Ukoliko imate više pitanja, slobodno nam se obratite. 🤓
      </h3>
      <a href="tel:+385917865619">
        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Nazovite nas!
        </button>
      </a>
    </section>
    <div class="relative -mt-12 lg:-mt-24 -mb-[1px]">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"></path>
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
            </path>
          </g>
        </g>
      </svg>
    </div>
  </body>
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
    title: 'Instrukcije | Poduke Parallel',
    ogTitle: 'Poduke Parallel',
    description: 'Bez puno muke, uz Parallel poduke! Održavamo instrukcije iz svih obaveznih i velikog broja stručnih predmeta!',
    ogDescription: 'Bez puno muke, uz Parallel poduke! Održavamo instrukcije iz svih obaveznih i velikog broja stručnih predmeta!',
    ogImage: '../assets/img/instrukcijecjenik.png',
    twitterCard: '../assets/img/instrukcijecjenik.png',
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

</script>

<style scoped>
.gradientline {
  background: linear-gradient(to right, rgba(85, 150, 0, 0.862), #00bbcce0);
}

.gradient {
  background: #00B4DB;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, rgba(85, 150, 0, 0.862), #00bbcce0);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgba(85, 150, 0, 0.862), #00bbcce0);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

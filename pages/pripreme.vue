<template>
  <Head>
    <Title>Pripreme za državnu maturu | Poduke Parallel</Title>
    <Meta name="description"
      content="Bez puno muke, uz Parallel poduke! Uspješno savladajte gradivo neophodno za polaganje državne mature!" />
    <Style type="text/css" />
  </Head>

  <body class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif;">

    <div class="py-10 mx-1" id='cjenik'>
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <p class=" tracking-loose w-full">Bez puno muke, uz Parallel poduke!</p>
          <h1 class="mb-4  text-4xl lg:text-5xl font-bold leading-tight w-full">
            Pripreme za državnu maturu
          </h1>
          <p class="leading-normal text-xl mb-8">
            Uspješno savladajte gradivo neophodno za polaganje državne mature!
          </p>
          <NuxtLink to="#mojplanzamaturu"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Kreiraj svoj plan
          </NuxtLink>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-2/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50" src="../assets/img/mojepripreme.png" />

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
    <section class="bg-white py-8 -my-[1px] ">
      <div class="container mx-auto pt-4 pb-12 text-gray-800">
        <h2 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Kalkulator cijene
        </h2>
        <div class="w-full mb-4" id='mojplanzamaturu'>
          <div class="h-1 mx-auto gradientline w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="relative  flex justify-center">
          <div class=''>
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
                <tr class="bg-white border-b border-gray-200   hover:bg-lime-50" v-for='item in programimature'
                  v-show='!isInCart(item)' @click='addToCart(item)'>

                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <p class=''>
                      {{ item.title }}
                    </p>
                    <p class='p-0 m-0'>
                      {{ item.razina }}
                    </p>

                  </th>
                  <td class="px-6 py-4 text-gray-800 text-base">
                    {{ item.brojSati }}
                  </td>
                  <td class="px-6 py-4 text-nowrap whitespace-nowrap text-gray-600">
                    {{ item.cijena }} €
                  </td>
                </tr>


              </tbody>
            </table>

            <div class="min-w-full px-1  py-6 bg-gray-900 text-center  text-white shadow-xl ">

              <div>
                <h1 class="text-white font-semibold text-2xl" v-show='kosarica.length === 0'>Kreiraj svoj plan!</h1>
                <h1 class="text-white font-semibold text-2xl" v-show='kosarica.length > 0'>Tvoj plan!</h1>
                <div v-show='kosarica.length > 0'>
                  <hr class="mt-4 py-2">
                  <div class="flex justify-center  text-lg font-medium text-white  bg-green-50  relative">


                    <table class="w-full  border-slate-800 text-sm text-left rtl:text-right text-gray-500 ">
                      <thead class="text-xs  text-white uppercase bg-slate-800 ">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Državna Matura
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Cijena
                          </th>
                          <th scope="col" class="px-6 py-3 relative">

                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-gray-100 border-b" v-for='item in kosarica'>

                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <p class=''>
                              {{ item.title }}
                            </p>
                            <p class='p-0 m-0'>
                              {{ item.razina }}
                            </p>

                          </th>
                          <td class="px-6 py-4 text-nowrap whitespace-nowrap">
                            {{ item.cijena }} €
                          </td>
                          <td class='relative'>
                            <div
                              class='absolute top-0 right-0 text-white bg-red-500 p-2 px-4 rounded-bl-lg hover:bg-red-600'
                              @click='removeFromCart(item)'> <i class="fa fa-ban"></i></div>
                          </td>
                        </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
                <hr class="mt-4 border-1 border-gray-600">
                <p class="pt-2 tracking-wide">

                  <span class="text-3xl font-semibold">{{ discountedTotalAmount }}</span>
                  <span class="text-gray-400 align-top">€</span>
                  <span class="text-gray-400 font-medium">/ {{ totalHoursAmount }} školskih sati</span>
                </p>
                <p class="mt-1 text-[12px] text-zinc-500 dark:text-zinc-400 font-light lg:text-base">Primjenjeno
                  <span class='font-bold'>{{ discountPercentage * 100 }}% popusta </span>.
                </p>

              </div>



            </div>
          </div>
        </div>


      </div>
    </section>
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
    <section class="container mx-auto text-center py-1 pb-10" id='radnovrijeme'>
      <h2 class="w-full my-2 text-3xl font-bold leading-tight text-center text-white">
        ✏️ Nisi siguran hoćeš li upisati željeni fakultet?
      </h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 class="my-4 text-xl px-3 leading-tight">
        Riješi maturu bez muke uz Parallel poduke i na vrijeme kreni s pripremama kako bi izbjegao/la nepotreban stres! 📚
      </h3>
      <h3 class="my-4 text-4xl leading-tight font-bold">
        Prijave do 11.03.2024.
      </h3>
      <a href="tel:+385917865619">
        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Nazovite nas!
        </button>
      </a>
    </section>
    <div class="relative -mt-12 lg:-mt-24 -my-[1px]">
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

<style scoped>
.gradientline {
  background: linear-gradient(to right, rgba(0, 62, 150, 0.875), #8f00cce0);
}

.gradient {
  background: #00B4DB;
  background: -webkit-linear-gradient(to right, rgba(0, 62, 150, 0.875), #8f00cce0);
  background: linear-gradient(to right, rgba(0, 62, 150, 0.875), #8f00cce0);
}
</style>

<script setup>
  import { ref } from "vue"

  const selectedPriprema = ref()
  const kosarica = ref([])


  const addToCart = (program) => {
    const existingItemIndex = kosarica.value.findIndex(item => item.title === program.title);

    if (existingItemIndex !== -1) {
      // Item already in the cart, remove it
      kosarica.value.splice(existingItemIndex, 1);
    }

    // Add the new item to the cart
    kosarica.value.push({ ...program, quantity: 1 });
    selectedPriprema.value = null;
  };

  const removeFromCart = (itemToRemove) => {
    const index = kosarica.value.findIndex(item => item.title === itemToRemove.title);
    if (index !== -1) {
      kosarica.value.splice(index, 1);
    }
  };




  const totalAmount = computed(() => {
    return kosarica.value.reduce((total, item) => total + parseFloat(item.cijena) * item.quantity, 0);
  });

  const totalHoursAmount = computed(() => {
    return kosarica.value.reduce((total, item) => total + parseFloat(item.brojSati), 0);
  });

  const discountPercentage = computed(() => {
    const selectedCount = kosarica.value.length;
    if (selectedCount === 2) {
      return 0.1; // 10% discount for 2 selected items
    } else if (selectedCount >= 3) {
      return 0.2; // 20% discount for 3 or more selected items
    }
    return 0; // No discount if less than 2 selected items
  });

  const discountedTotalAmount = computed(() => {
    const total = totalAmount.value;
    return total - (total * discountPercentage.value);
  });

  const isInCart = (item) => {
    return kosarica.value.some(cartItem => cartItem.title === item.title && cartItem.razina === item.razina);
  };




  const programimature = ref([
    {
      title: 'MATEMATIKA',
      razina: 'A razina',
      brojSati: '70',
      cijena: '420,00'
    },
    {
      title: 'MATEMATIKA',
      razina: 'B razina',
      brojSati: '50',
      cijena: '300,00'
    },
    {
      title: 'ENGLESKI',
      razina: 'A razina',
      brojSati: '40',
      cijena: '240,00'
    },
    {
      title: 'ENGLESKI',
      razina: 'B razina',
      brojSati: '30',
      cijena: '180,00'
    },
    {
      title: 'HRVATSKI',
      brojSati: '60',
      cijena: '360,00'
    },
    {
      title: 'FIZIKA',
      brojSati: '60',
      cijena: '360,00'
    },
    {
      title: 'KEMIJA',
      brojSati: '60',
      cijena: '360,00'
    },
  ])
</script>



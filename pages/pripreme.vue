<template>
  <section class="gradient py-8 " id='pripreme'>
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Pripreme za državnu maturu
      </h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradientline w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>


      <div class="relative overflow-x-auto w-full flex justify-center">
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for='item in programimature'>

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
      </div>

      <div class="flex flex-col sm:flex-row justify-center lg:pt-12 my-12 sm:my-4">


        <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">

          <!-- StartUp Card -->
          <div
            class="min-w-full h-full  p-6 bg-gray-900 text-center rounded-2xl text-white border-4 shadow-xl border-white">

            <div>
              <h1 class="text-white font-semibold text-2xl">Kreiraj svoj program!</h1>

              <hr class="mt-4 border-1 border-gray-600">
              <p class="pt-2 tracking-wide">

                <span class="text-3xl font-semibold">123</span>
                <span class="text-gray-400 align-top">€</span>
                <span class="text-gray-400 font-medium">/ 123 školskih sati</span>
              </p>
              <p class="mt-1 text-[12px] text-zinc-500 dark:text-zinc-400 font-light lg:text-base">Primjenjeno
                <span class='font-bold'>123% popusta </span>.
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
    </div>
  </section>
</template>

<style scoped>
.gradientline {
  background: linear-gradient(90deg, #d53369fb 0%, #daaf51 100%);
}

.gradient {
  background: linear-gradient(90deg, #339ad55c 0%, #51da6324 100%);
}
</style>

<script setup>
  import { ref } from "vue"

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
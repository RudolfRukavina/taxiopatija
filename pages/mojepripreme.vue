<template>
  <div
    class="pt-24  dark:ring-white/10 ring-primary/5 bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-blue-200 to-90%  shadow-xl items-center flex flex-col p-8 w-full bg-white ">
    <NuxtLink to="/" class='absolute left-0  top-14 mx-5 text-3xl rounded-xl px-3 p-5'><i class=" fa fa-chevron-left"></i>
    </NuxtLink>
    <div class="relative flex items-center gap-x-4">
      <img
        src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
        alt="" class="h-10 w-10 rounded-full ring-1 ring-primary/5">
      <div class="text-lg leading-6">
        <p class="font-semibold text-4xl text-primary "> <a href="#"> <span class="absolute inset-0"></span>
            Poduke Parallel
          </a> </p>
        <h2 class="text-zinc-500 text-md">
          Pripreme za državnu maturu
        </h2>
      </div>
    </div>



    <div class="pt-10">
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
</template>

<script setup>
  import { ref } from "vue"
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

</script>
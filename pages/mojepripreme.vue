<template>
  <div
    class="min-h-[90vh] dark:ring-white/10 ring-primary/5 bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-blue-200 to-90%  shadow-xl items-center flex flex-col p-8 w-full bg-white ">

    <!-- <div class="relative flex items-center gap-x-4">
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
    </div> -->



    <div class="">
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
            <div v-for='item in kosarica'>
              <hr class="mt-4 py-2">
              <div
                class="px-6 py-2 text-lg font-medium text-white  bg-green-50 rounded-xl rounded-tr-none relative border-4">
                <div class='absolute top-0 right-0 bg-red-500 p-2 px-4 rounded-bl-lg hover:bg-red-600'
                  @click='removeFromCart(item)'> <i class="fa fa-ban"></i></div>
                <img
                  src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
                  alt="" class="h-7 w-7 rounded-full ring-1 ring-primary/5 inline-block">
                <p class=' text-2xl text-black mx-1'>{{ item.naslov }}</p>
                <p class=' text-3xl text-black mx-1'>{{ item.razina }}</p>
                <p class=' mt-2 text-gray-800 text-sm'>{{ item.fast }}</p>
                <p class='text-gray-700 text-md'> {{ item.brojSati }}</p>
                <p class='text-black text-md'> {{ item.cijena }} €</p>
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

          <div v-if='selectedPriprema'>
            <div class=" bg-transparent ">
              <table
                class="w-full text-sm fixed bottom-0 z-40 left-0 text-left  text-gray-500 border bg-gray-50 box-shadow1 ">
                <thead class="text-xs text-gray-400 uppercase bg-gray-900 border w-full">
                  <tr>
                    <th scope="col" class="px-6 text-lg py-2 w-3/4">
                      {{ selectedPriprema.naslov }}
                    </th>
                    <div @click='selectedPriprema = null'
                      class='bg-red-500 hover:bg-red-600 cursor-pointer text-2xl flex justify-center items-center p-3 text-gray-100 rounded-sm m-1'>
                      <i class="fa fa-ban"></i>
                    </div>

                  </tr>
                </thead>
                <tbody>
                  <tr class=" bg-slate-100 border-b border-gray-800 cursor-pointer hover:bg-green-100"
                    v-for='(program, index) in selectedPriprema.programi' @click='addToCart(program, index)'>
                    <th scope=" row" class="px-6 py-2 text-lg font-medium text-gray-900 ">
                      <img
                        src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
                        alt="" class="h-6 w-6 rounded-full ring-1 ring-primary/5 inline-block">
                      <p class='inline-block mx-4 text-2xl'>{{ program.ime }}</p>
                      <p class='  text-xl mx-10 font-bold border-b'>{{ program.razina }}</p>

                      <p class='inline-block text-gray-800 text-md mx-8' v-if='program.fast'>{{ program.fast }}</p>
                      <p class='text-gray-600 text-md mx-8'> {{ program.brojSati }}</p>
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

          <div class="mt-5">
            <p class="font-semibold cursor-pointer text-gray-400 text-left flex justify-between py-2"
              v-if='!kosarica.some(item => item.naslov === "Matematika")' @click='selectedPriprema = pripreme[0]'>
              <span class="material-icons align-middle">
                Matematika
              </span>
              <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
            </p>

            <p class="font-semibold text-gray-400 text-left  flex justify-between cursor-pointer py-2"
              v-if='!kosarica.some(item => item.naslov === "Engleski")' @click='selectedPriprema = pripreme[1]'>
              <span class="material-icons align-middle">
                Engleski
              </span>
              <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
            </p>
            <p class="font-semibold text-gray-400 text-left  flex justify-between cursor-pointer py-2"
              v-if='!kosarica.some(item => item.naslov === "Hrvatski")' @click='selectedPriprema = pripreme[2]'>
              <span class="material-icons align-middle">
                Hrvatski
              </span>
              <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
            </p>
            <p class="font-semibold text-gray-400 text-left  flex justify-between cursor-pointer py-2"
              v-if='!kosarica.some(item => item.naslov === "Fizika")' @click='selectedPriprema = pripreme[3]'>
              <span class="material-icons align-middle">
                Fizika
              </span>
              <button class=' text-lg font-bold'><i class="fa fa-plus"></i></button>
            </p>
            <p class="font-semibold text-gray-400 text-left flex justify-between cursor-pointer py-2"
              v-if='!kosarica.some(item => item.naslov === "Kemija")' @click='selectedPriprema = pripreme[4]'>
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
  </div>
</template>

<script setup>
  import { ref } from "vue"
  const selectedPriprema = ref()
  const kosarica = ref([])
  const addToCart = (program, index) => {
    const existingItem = kosarica.value.find(item => item.naslov === program.naslov);

    if (existingItem) {
      // Item already in the cart, update quantity or handle as needed
      // For simplicity, let's assume you can't add the same item twice
      console.log("Item already in the cart!");
    } else {
      // Add the new item to the cart
      kosarica.value.push({ ...program, quantity: 1 });
    }

    selectedPriprema.value = null;
  };


  const removeFromCart = (itemToRemove) => {
    const index = kosarica.value.findIndex(item => item.naslov === itemToRemove.naslov);
    if (index !== -1) {
      kosarica.value.splice(index, 1);
    }
  };


  const totalAmount = computed(() => {
    return kosarica.value.reduce((total, item) => total + item.cijena * item.quantity, 0);
  });

  const totalHoursAmount = computed(() => {
    return kosarica.value.reduce((total, item) => total + parseInt(item.brojSati), 0);
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

  const pripreme = ref([
    {
      selectedProgram: null,
      naslov: "Matematika",
      programi: [
        {
          naslov: "Matematika",
          ime: "Matematika",
          razina: "A razina",
          fast: "Ubrzani program",
          brojSati: "35 školskih sati",
          cijena: 200,
          style: "col-span-2",
          isActive: false,
        },
        {
          naslov: "Matematika",
          ime: "Matematika",
          razina: "A razina",
          brojSati: "70 školskih sati",
          cijena: 390,
          isActive: false,
        },
        {
          naslov: "Matematika",
          ime: "Matematika",
          razina: "B razina",
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
          naslov: "Engleski",
          ime: "Engleski",
          razina: "A razina",
          brojSati: "40 školskih sati",
          cijena: 240,
          isActive: false,
        },
        {
          naslov: "Engleski",
          ime: "Engleski",
          razina: "B razina",
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
          naslov: "Hrvatski",
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
          naslov: "Fizika",
          ime: "Fizika",
          fast: "Ubrzani program",
          brojSati: "30 školskih sati",
          cijena: 180,
          style: "col-span-2",
          isActive: false,
        },
        {
          naslov: "Fizika",
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
          naslov: "Kemija",
          ime: "Kemija",
          fast: "Ubrzani program",
          brojSati: "30 školskih sati",
          cijena: 180,
          style: "col-span-2",
          isActive: false,
        },
        {
          naslov: "Kemija",
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
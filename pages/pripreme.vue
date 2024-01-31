<template>
  <section class="gradient py-8 " id='pripreme'>
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Pripreme za državnu maturu
      </h2>
      <div class="w-full mb-4">
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
              <tr class="bg-white border-b border-gray-200   hover:bg-lime-100" v-for='item in programimature'
                v-show='!isInCart(item)' @click='addToCart(item)'>

                <th scope="row" :class="{ 'bg-green-500': isInCart(item) }"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
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
                <div class="px-6 py-2 text-lg font-medium text-white  bg-green-50 rounded-xl  relative">


                  <table class="max-w-sm border-2 border-slate-800 text-sm text-left rtl:text-right text-gray-500 ">
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
                      <tr class="bg-green-100 border-b dark:bg-gray-800 dark:border-gray-700" v-for='item in kosarica'>

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
                          <div class='absolute top-0 right-0 bg-red-500 p-2 px-4 rounded-bl-lg hover:bg-red-600'
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



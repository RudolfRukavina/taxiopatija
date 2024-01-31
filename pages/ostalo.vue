<template>
  <section class="bg-gray-100  py-8 " id='ostalo'>
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Ostale usluge
      </h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradientline w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <NuxtLink to="#seminari" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-2xl pt-3 text-gray-800 px-6">
              Pomoć u pisanju
            </div>
            <div>
              <li class="text-gray-800 text-lg px-6 ">
                Zadaća
              </li>
              <li class="text-gray-800 text-lg px-6 ">
                Seminara
              </li>
              <li class="text-gray-800 text-lg px-6">
                Projekata
              </li>
              <li class="text-gray-800 text-lg px-6">
                Lektira
              </li>
            </div>
          </NuxtLink>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-start">
            <div class="w-full font-bold text-2xl pt-3 text-gray-800 ">
              Priprema za natjecanja
            </div>
          </div>

        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-start">
            <div class="w-full font-bold text-2xl pt-3 text-gray-800 ">
              Organizacija seminara
            </div>
          </div>

        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-start">
            <div class="w-full font-bold text-2xl pt-3 text-gray-800 ">
              Edukacija iz različitih područja
            </div>
          </div>

        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <NuxtLink to="#pisanje" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full pt-3 font-bold text-2xl text-gray-800 px-6">
              Pomoć u pisanju
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
              Cjenik provođenja
            </p>
          </NuxtLink>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-center">
            <table class="w-full text-sm text-left rtl:text-right border-2 text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white uppercase bg-slate-900 ">
                <tr>
                  <th scope="col" class=" py-3 text-base text-start px-6">

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
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <a to="'#natjecanja" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full pt-3 font-bold text-2xl text-gray-800 px-6">
              Priprema za natjecanja
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
              Cjenik provođenja
            </p>
          </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-end">
            <table class="w-full text-sm text-left rtl:text-right border-2 text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white uppercase bg-slate-900 ">
                <tr>
                  <th scope="col" class=" py-3 text-base text-start px-6">

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
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradientline {
  background: linear-gradient(90deg, #d53369fb 0%, #daaf51 100%);
}
</style>
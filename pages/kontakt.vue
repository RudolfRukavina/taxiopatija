<template>
  <div
    class="min-h-[90vh]  dark:ring-white/10 ring-primary/5 bg-gradient-to-b from-indigo-100 from-10% via-sky-100 via-30% to-blue-200 to-90% shadow-xl items-center flex flex-col p-8 w-full bg-white">

    <div class="relative flex items-center gap-x-4 ">
      <img
        src="https://scontent.fzag3-1.fna.fbcdn.net/v/t39.30808-6/272338202_113056497938619_320687629502909542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9wXAN7h9bvgAX-pR4xl&_nc_ht=scontent.fzag3-1.fna&oh=00_AfCR3qUECwUDTIRxDViCvXSlKM5SyyKXLdex11XY1yLJWw&oe=65BBA156"
        alt="" class="h-10 w-10 rounded-full ring-1 ring-primary/5">
      <div class="text-lg leading-6">
        <p class="font-semibold text-4xl text-primary "> <a href="#"> <span class="absolute inset-0"></span>
            Poduke Parallel
          </a> </p>
        <h2 class="text-zinc-500 text-2xl">
          Kontakt
        </h2>
      </div>
    </div>



    <section class="bg-sky-50 rounded-2xl grid grid-cols-1 p-5 mt-10">
      <div class="container p-2 mb-10 mx-auto">
        <div class="text-center">
          <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Kontaktirajte nas!</h1>

          <p class="mt-3 text-gray-500 dark:text-gray-400">Za bilo kakva pitanja ili usluge, slobodno nas
            kontaktirajte na broj telefona ili e-mail.</p>
        </div>

        <div class="grid grid-cols-1 mt-10">



          <div class="flex flex-col items-center justify-center text-center">
            <a class="p-3  text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800" href="tel:+385917865619">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>

            <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Telefon</h2>
            <p class="mt-2 text-gray-500 dark:text-gray-400">Nazovite nas!</p>
            <a href="tel:+385917865619" class="mt-2 text-blue-500 dark:text-blue-400">+385917865619</a>
          </div>
        </div>
      </div>
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
            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Predmet</label>
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
  </div>
</template>
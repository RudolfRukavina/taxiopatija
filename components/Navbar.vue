<template>
  <nav id='navbar'
    class="bg-gradient-to-t from-indigo-100 from-10% via-sky-50 via-30% to-emerald-50 to-90% flex shadow-2xl sticky top-0 overflow-x-scroll z-50">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <li class='text-nowrap whitespace-nowrap ps-5'>
            <NuxtLink to="/" class="text-gray-900 dark:text-white hover:underline text-nowrap" aria-current="page">
              Naslovnica</NuxtLink>
          </li>
          <div class='border border-blue-200'></div>
          <li class='text-nowrap whitespace-nowrap'>
            <NuxtLink to="/instrukcije" class="text-gray-900 dark:text-white hover:underline text-nowrap">Instrukcije
            </NuxtLink>
          </li>
          <div class='border border-blue-200'></div>
          <li class='text-nowrap whitespace-nowrap'>
            <NuxtLink to='mojepripreme' class="text-gray-900 dark:text-white hover:underline text-nowrap">Moje pripreme
            </NuxtLink>
          </li>
          <div class='border border-blue-200'></div>
          <li class='text-nowrap whitespace-nowrap'>
            <NuxtLink to='ostaleusluge' class="text-gray-900 dark:text-white hover:underline text-nowrap">Ostale usluge
            </NuxtLink>
          </li>
          <div class='border border-blue-200'></div>
          <li class='text-nowrap whitespace-nowrap'>
            <NuxtLink to="kontakt" class="text-gray-900 dark:text-white hover:underline text-nowrap">Kontakt</NuxtLink>
          </li>
          <div class='border border-blue-200'></div>
          <li class='text-nowrap whitespace-nowrap'>
            <NuxtLink href="iskustva" class="text-gray-900 dark:text-white hover:underline text-nowrap">Iskustva
            </NuxtLink>
          </li>
          <div class='border border-blue-200'></div>
          <li class='text-nowrap whitespace-nowrap pe-3'>
            <NuxtLink to="programi" class="text-gray-900 dark:text-white hover:underline text-nowrap">Svi programi
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped></style>

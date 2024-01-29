<template>
  <nav id="navbar"
    class="bg-gradient-to-t from-indigo-100 from-10% via-sky-50 via-30% to-emerald-50 to-90% flex shadow-2xl overflow-x-scroll">
    <div class="px-4 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 rtl:space-x-reverse text-md text-nowrap whitespace-nowrap">
          <li>
            <NuxtLink to="/" class="link-item" aria-current="page">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Naslovnica
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/instrukcije" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Instrukcije
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="mojepripreme" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Moje pripreme
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="ostaleusluge" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Ostale usluge
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="kontakt" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Kontakt
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="iskustva" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Iskustva
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="programi" class="link-item">
              <div class="link-content p-1 px-3 m-1 border-x my-2 border-sky-100 rounded-xl">
                Svi programi
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped></style>

<style scoped>
.router-link-exact-active .link-content {
  color: rgb(28, 28, 28);
  font-weight: 600;
  text-decoration: underline;
  background-color: rgb(228, 247, 255);
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
}
</style>
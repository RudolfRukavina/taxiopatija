<template>
  <Head>
    <Title>Taxi Opatija</Title>
    <Meta name="description" content="Brza i pouzdana Opatijska taxi služba." />
  </Head>

  <header>
    <img class="hero-photo h-1/3 sm:h-56" src="../assets/imgs/opatijamainphoto.jpeg" alt="" />
    <div class="flex justify-center -mt-5">
      <div class="hero-hours">
        <p class="m-0 mx-1 p-1 px-12 text-lg fw-bold">0 - 24</p>
      </div>
    </div>
  </header>
  <main>
    <div>
      <div class="relative isolate px-6 lg:px-8">
        <div class="mx-auto max-w-2xl pt-10">
          <div class="flex justify-center">
            <img src="../assets/imgs/grbopatije.png" alt="" class="-mt-5 object-cover w-3/12 sm:w-24" />
          </div>
          <div class="text-center">
            <h1 class="text-6xl font-bold tracking-tight text-gray-900">
              Taxi Opatija
            </h1>
            <h2 class="text-xl font-bold tracking-tight text-gray-900">
              Brza i pouzdana taxi služba.
            </h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a id="callLink" href="tel:+38598491369" class="inline-block w-50">
                <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg">
                  Pozovi prijevoz
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="py-2 footer-border bg-gray-200 fixed bottom-0">
    <div class="mx-auto flex flex-col items-center justify-center text-gray-700">
      <div class="w-full grid grid-cols-3 text-center">
        <div class="text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[18px]">
          Vl. Ante Rukavina
        </div>
        <div class="font-bold text-[10px] sm:text-[14px] lg:text-[18px] xl:text-[22px]">
          Taxi Opatija d.o.o.
        </div>
        <div class="text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[18px]">
          Dr. Ante Mandića 2
        </div>
        <div class="text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[18px]">
          OIB: 66045096237
        </div>
        <a class="text-[10px] sm:text-[14px] lg:text-[18px] xl:text-[20px]" href="tel:+38598491369">+385 98 491 369</a>
        <div class="text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[18px]">
          51410 Opatija, Croatia
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  useHead({
    title: "Taxi Opatija",
    meta: [
      {
        name: "description",
        content: "Brza i pouzdana Opatijska taxi služba.",
      },
      { hid: "og:url", property: "og:url", content: "https://taxiopatija.hr" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", content: "Taxi Opatija" },
      {
        hid: "og:description",
        property: "og:description",
        content: "Brza i pouzdana Opatijska taxi služba.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://taxiopatija.hr/opatija.jpeg",
      },
    ],

    bodyAttrs: {
      class: "",
    },
    script: [],
  });

  useSeoMeta({
    title: "Taxi Opatija",
    ogTitle: "Taxi Opatija",
    description: "Brza i pouzdana Opatijska taxi služba.",
    ogDescription: "Brza i pouzdana Opatijska taxi služba.",
    ogImage: "https://taxiopatija.hr/opatija.jpeg",
    twitterCard: "https://taxiopatija.hr/opatija.jpeg",
  });
</script>

<style>
.hero-photo {
  width: 100%;
  object-fit: cover;
  border-radius: 0 0 1000em 1000em / 0 0 100em 100em;
}

.footer-border {
  width: 100%;
  object-fit: cover;
  border-radius: 1000em 1000em 0 0 / 20em 20em 0 0;
  border-top: 0.1px dotted rgba(0, 30, 180, 0.347);
  background: rgb(0, 29, 180);
  background: linear-gradient(0deg,
      rgba(0, 29, 180, 0.0970982142857143) 0%,
      rgba(0, 159, 180, 0.09429709383753504) 100%);
}

.hero-hours {
  font-weight: 600;
  color: white;
  background: rgb(0, 153, 180);
  background: linear-gradient(0deg,
      rgba(0, 153, 180, 0.9990589985994398) 0%,
      rgba(0, 114, 180, 1) 100%);
  border-radius: 23px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

body {
  overflow-y: hidden;
  background: rgb(58, 59, 180);
  background: linear-gradient(0deg,
      rgba(58, 59, 180, 0) 0%,
      rgba(29, 208, 253, 0.0746892507002801) 75%,
      rgba(147, 69, 252, 0) 100%);
}

button {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px,
    rgba(0, 0, 0, 0.3) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
}
</style>

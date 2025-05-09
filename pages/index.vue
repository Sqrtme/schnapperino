<template>
  <div class="flex items-center justify-start h-[100vh] flex-col">
    <img class="w-auto" src="/public/images/base.jpg" alt="Icon" />
      <div class="p-6 max-w-4xl mx-auto">
    <!-- Заголовок с белым текстом -->
    <h1 class="text-2xl font-bold mb-6 text-center text-white opacity-90">Alle unsere Geschäfte sind rund um die Uhr geöffnet 🕒</h1>

    <!-- Контейнер с карточками -->
    <div class="flex flex-col gap-6">
      <LocationComponent v-for="location in shops" :location="location" :curentOpenedMapId="currLocationId" @locationClick="onLocationClick" />
    </div>
  </div>
  <footer class="w-full py-4 bg-black mt-6">
    <div class="max-w-4xl mx-auto text-center text-white">
      <div class="mt-2 text-sm">
        <NuxtLink to="/products" class="text-lg hover:text-orange ">Products</NuxtLink> | 
        <NuxtLink to="/impressum" class="text-lg hover:text-orange">Impressum</NuxtLink>
      </div>
      <p class="mt-2">&copy; 2025 Schnapperino GmbH</p>
    </div>
  </footer>
  </div>

</template>

<script setup>
const currLocationId = ref(0)
const onLocationClick = (id) => currLocationId.value = id
const defaultStyle = ref("min-w-[200px] text-center leading-none hover-zoom px-4 py-2 rounded-xl cursor-pointer bg-[#ffe189] opacity-95")
const shops = ref([
  {
    id: 1,
    name: 'Filiale Hockenheim',
    address: 'Ob. Hauptstraße 2, 68766 Hockenheim',
    mapLink: 'https://www.google.com/maps?q=Ob.+Hauptstraße+2,+68766+Hockenheim',
    iframeSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.4461058437677!2d8.539557215684477!3d49.322242179339446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797e0319d81e9a5%3A0x8d7b70e6aa9d121!2sOb.%20Hauptstra%C3%9Fe%202%2C%2068766%20Hockenheim!5e0!3m2!1sde!2sde!4v1713960000000!5m2!1sde!2sde',
  },
  {
    id: 2,
    name: 'Filiale Heidelsheim',
    address: 'Hofferichstraße 31, 76646 Bruchsal',
    mapLink: 'https://www.google.com/maps?q=Hofferichstraße+31,+76646+Bruchsal',
    iframeSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7405515210845!2d8.59011011569213!3d49.12614777931678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797d91ef6b6f4c1%3A0x5f408a32463268b1!2sHofferichstra%C3%9Fe%2031%2C%2076646%20Bruchsal!5e0!3m2!1sde!2sde!4v1713960000002!5m2!1sde!2sde',
  },
  {
    id: 3,
    name: 'Filiale Untergrombach',
    address: 'Bachstraße 34, 76646 Bruchsal',
    mapLink: 'https://www.google.com/maps?q=Bachstraße+34,+76646+Bruchsal',
    iframeSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.812778846657!2d8.591514515692109!3d49.124831279316745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797d92e20b7ce91%3A0x3d79f43c7ff11a82!2sBachstra%C3%9Fe%2034%2C%2076646%20Bruchsal!5e0!3m2!1sde!2sde!4v1713960000001!5m2!1sde!2sde',
  },
  {
    id: 4,
    name: 'Filiale Karlsbad',
    address: 'Pforzheimer Str. 3, 76307 Karlsbad',
    mapLink: 'https://www.google.com/maps?q=Pforzheimer+Str.+3,+76307+Karlsbad',
    iframeSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.3086572903744!2d8.497351615681316!3d48.917507979292245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479730cf159b729f%3A0x8a658e9227f0d78a!2sPforzheimer%20Str.%203%2C%2076307%20Karlsbad!5e0!3m2!1sde!2sde!4v1713960000003!5m2!1sde!2sde',
  },
]);
useHead(() => ({
  title: 'Schnapperino'
}))
definePageMeta({
  layout: 'empty'
})
</script>
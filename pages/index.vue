<script setup lang="ts">
  import { Main } from '#components';

</script>

<template>
  <div class="flex items-center justify-start h-[100vh] flex-col">
    <img class="w-auto" src="/public/images/base.jpg" alt="Icon" />
    <div class="flex gap-10 justify-center items-center text-xl font-bold">
      <NuxtLink to="/locations"><p class="hover-underline">Locations</p></NuxtLink>
      <NuxtLink to="/products"><p class="hover-underline">Products</p></NuxtLink>
      <NuxtLink to="/impressum"><p class="hover-underline">Impressum</p></NuxtLink>
    </div>
  </div>
</template>
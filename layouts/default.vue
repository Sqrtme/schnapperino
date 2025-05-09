<template>
  <div>
    <header class="z-50 fixed right-0 left-0 bg-orange bg-opacity-90 shadow-md px-6 py-4 flex items-center justify-between border-collapse">
      <NuxtLink to="/" class="text-gray-600 hover:text-black">
        <NuxtImg src="/images/header_logo.png" class="w-[40px] h-[40px]" />
      </NuxtLink>
      <nav class="space-x-4">
        <NuxtLink to="/locations" class="text-black hover:underline underline-offset-4">Filialen</NuxtLink>
        <NuxtLink to="/products" class="text-black hover:underline underline-offset-4">Produkte</NuxtLink>
        <NuxtLink to="/impressum" class="text-black hover:underline underline-offset-4">Impressum</NuxtLink>
      </nav>
    </header>
    <main class="min-h-screen p-6">
      <div class="mt-[76px]">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute, useHead } from 'nuxt/app'
import { routerNames } from '~/consts.ts'
const route = useRoute()

useHead(() => ({
  title: `${routerNames[route.name] ?? 'Schnapperino'}`
}))
</script>
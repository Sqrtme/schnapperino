<template>
  <div>
    <header class="z-50 fixed right-0 left-0 bg-orange bg-opacity-90 shadow-md px-6 py-4 flex items-center justify-between border-collapse">
      <NuxtLink to="/" class="text-gray-600 hover:text-black">
        <NuxtImg src="/images/header_logo.png" class="w-[40px] h-[40px]" />
      </NuxtLink>
      <nav class="space-x-4">
        <NuxtLink to="/" class="text-black hover:text-white">Homepage</NuxtLink>
        <!-- <NuxtLink to="/products" class="text-black hover:text-white">Produkte</NuxtLink> -->
        <NuxtLink to="/impressum" class="text-black hover:text-white">Impressum</NuxtLink>
      </nav>
    </header>
    <main class="min-h-screen py-6 sm:p-6">
      <div class="mt-[76px]">
        <slot />
      </div>
    </main>
  </div>
        <footer class="w-full py-4 bg-black mt-6">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div class="mt-2 text-sm">
            <!-- <NuxtLink to="/products" class="text-lg hover:text-orange ">Products</NuxtLink> |  -->
            <NuxtLink to="/impressum" class="text-lg hover:text-orange">Impressum</NuxtLink>
          </div>
          <p class="mt-2">&copy; 2025 Schnapperino GmbH</p>
        </div>
      </footer>
</template>

<script setup>
import { useRoute, useHead } from 'nuxt/app'
import { routerNames } from '~/consts.ts'
const route = useRoute()

useHead(() => ({
  title: `${routerNames[route.name] ?? 'Schnapperino'}`
}))
</script>
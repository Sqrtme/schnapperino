<template>
  <footer class="bg-gray-900 mt-8">	
    <div class="container max-w-6xl mx-auto flex items-center px-2 py-8">
      <div class="w-full mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
            <span class="text-base text-gray-200">© 2025 Schnapperino GmbH</span>
          </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-reset flex justify-center flex-1 md:flex-none items-center">
            <li>
              <NuxtLink class="inline-block py-2 px-3 text-white no-underline" to="/">Main</NuxtLink>
            </li>
            <li>
              <NuxtLink class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" to="/impressum">Impressum</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
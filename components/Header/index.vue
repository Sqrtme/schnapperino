<template>
  <nav class="fixed top-0 left-0 right-0 shadow-md z-50 backdrop-blur-md bg-green">
      <div class="flex items-center justify-between px-12 text-sm text-white">
        <div class="h-full w-[130px] flex items-center justify-start">
          <div>LOGO</div>
          <ul class="flex items-center gap-8 px-12 li:cursor-pointer h-[80px]">
            <li><NuxtLink :class="{ 'font-semibold': $route.path === '/' }" to="/">Home</NuxtLink></li>
            <li><NuxtLink :class="{ 'font-semibold': $route.path === '/impressum' }" to="/impressum">Impressum</NuxtLink></li>
          </ul>
        </div>
        <div class="h-full w-[130px] text-end hover:underline">
          <a href="mailto:info@schnapperino.com">info@schnapperino.com</a>
        </div>
      </div>

  </nav>
</template>
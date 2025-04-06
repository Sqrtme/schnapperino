<script setup>
const props = defineProps({
  title: '',
  subTitle: '',
  text: '',
  img: '',
  first: Boolean,
  last: Boolean,
})

</script>

<template>
  <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink p-6 !pt-0" :class="{ '!pl-0': first, '!pr-0': last }">
    <div class="flex-1 bg-white rounded overflow-hidden shadow-2xl flex-wrap">
      <NuxtImg v-if="img.length" :src="img" class="h-auto max-h-[248px] w-full pb-6 max-w-[360px]" />
      <div v-else class="h-auto w-full pb-6"></div>
      <p class="w-full text-gray-600 text-xs md:text-sm px-6">{{ subTitle }}</p>
      <div class="w-full font-bold text-xl text-gray-900 px-6">{{ title }}</div>
      <p class="text-gray-800 text-base px-6 mb-5">
        {{ text }}
      </p>
    </div>
  </div>
</template>
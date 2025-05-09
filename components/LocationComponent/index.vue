<template>
  <div class="rounded-md bg-white opacity-85 p-6" @click="() => onClick(location.id)">
    <h2 class="text-xl font-semibold mb-2 text-gray-800 flex gap-2 items-center">
      <span>{{ location.name }}</span>
    </h2>

    <h3 class="mb-2 flex items-center gap-2 cursor-pointer" @click="() => copyToClipboard(location.address)">
      <span>{{ location.address }}</span>
      <svg width="12" height="12" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/><rect width="13" height="13" x="9" y="9" rx="2"/></g></svg>
    </h3>
<!-- 
    <Transition
      enter-active-class="transition-[max-height] duration-500 ease-in-out"
      enter-from-class="max-h-0 overflow-hidden"
      enter-to-class="max-h-64 overflow-hidden"
      leave-active-class="transition-[max-height] duration-300 ease-in-out"
      leave-from-class="max-h-64 overflow-hidden"
      leave-to-class="max-h-0 overflow-hidden"
    >
      <div class="relative mb-4" v-if="curentOpenedMapId === location.id">
        <iframe
          class="w-full h-48 rounded-lg"
          :src="location.iframeSrc"
          style="border:0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Transition> -->

    <a
      :href="location.mapLink"
      target="_blank"
      rel="noreferrer noopener"
      class="text-blue-600 underline text-sm text-end"
    >
      Auf Google Maps öffnen
    </a>
  </div>
</template>

<script setup>
const emit = defineEmits(['locationClick']);
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

defineProps({
  curentOpenedMapId: { type: Number, default: 0 },
  location: { type: Object, default: {
    id: 0,
    name: '',
    address: '',
    mapLink: '',
    iframeSrc: '',
  }}
})
const onClick = (id) => {
  emit('locationClick', id)
}
</script>
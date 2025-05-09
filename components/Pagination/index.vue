<template>
  <div class="flex items-center justify-center my-5">
    <button 
      @click="$emit('change', currentPage - 1)" 
      :disabled="currentPage <= 1"
      class="px-3 py-2 border border-gray-300 rounded-md mr-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Предыдущая
    </button>
    
    <div class="flex mx-2">
      <button
        v-for="page in displayPages" 
        :key="page"
        @click="$emit('change', page)"
        :class="[
          'w-9 h-9 mx-1 flex items-center justify-center border rounded-md',
          page === currentPage 
            ? 'bg-blue-600 text-white border-blue-600' 
            : 'border-gray-300 bg-white hover:bg-gray-100'
        ]"
      >
        {{ page }}
      </button>
    </div>
    
    <button 
      @click="$emit('change', currentPage + 1)" 
      :disabled="currentPage >= totalPages"
      class="px-3 py-2 border border-gray-300 rounded-md ml-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Следующая
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['change'])

// Расчет страниц для отображения (например, показываем 5 страниц вокруг текущей)
const displayPages = computed(() => {
  const pages = []
  const maxDisplayPages = 5
  let startPage = Math.max(1, props.currentPage - Math.floor(maxDisplayPages / 2))
  let endPage = Math.min(props.totalPages, startPage + maxDisplayPages - 1)
  
  if (endPage - startPage + 1 < maxDisplayPages) {
    startPage = Math.max(1, endPage - maxDisplayPages + 1)
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  
  return pages
})
</script>
<script setup>
  import { ref, onMounted } from 'vue'
  const products = ref([])
  const loading = ref(true)
  const error = ref('')
  const selectedFilterId = ref(0)
  const filters = [{ name: 'all', id: 0 }, { name: 'snacks', id: 1 }, { name: 'drinks', id: 2 }];

  const fetchProducts = async (filter = 0) => {
  loading.value = true
  error.value = ''
  try {
    const query = filter !== 0 ? `?filter=${filter}` : ''
    const response = await $fetch(`/api/products${query}`, {
      query: {
        page: 1,
        limit: 200,
      }
    })

    products.value = response.products
  } catch (err) {
    error.value = 'Не удалось загрузить продукты.'
  } finally {
    loading.value = false
  }
}

  
  const applyFilter = (filterId) => {
    selectedFilterId.value = filterId
    fetchProducts(filterId)
  }
  onMounted(() => {
    fetchProducts()
  })
</script>

<template>
  <div class="flex items-center justify-start h-[100vh] flex-col">
    <div class="w-full p-4 rounded-md bg-white">
      <div class="flex gap-4 mt-6">
      <button
        v-for="filter in filters"
        :key="filter.name"
        :class="['px-4 py-2 rounded-md', selectedFilterId === filter.id ? 'bg-blue-500 text-white' : 'bg-gray-200']"
        @click="applyFilter(filter.id)"
      >
        {{ filter.name }}
      </button>
    </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      <div v-if="loading">Загружается...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    </div>
  </div>
</template>
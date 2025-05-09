<template>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 max-w-[400px]">
    <img v-if="product?.imageUrl" :src="product.imageUrl" alt="Product Image" class="w-full h-48 object-cover" />

    <div class="p-4 space-y-2">
      <h2 class="text-xl font-semibold text-gray-800">{{ product.name }}</h2>
      <p class="text-gray-500 text-sm truncate">{{ product.description }}</p>

      <div class="flex items-center justify-between mt-2">
        <span class="text-lg font-bold text-green-600">{{ product.price }} €</span>
        <span
          v-if="product.pfand"
          class="text-xs text-white bg-blue-500 px-2 py-0.5 rounded-full"
        >
          +Pfand
        </span>
      </div>

      <div class="text-sm text-gray-600 mt-2 space-y-1">
        <p v-if="product.brand?.name">Бренд: <span class="font-medium">{{ product.brand.name }}</span></p>
        <p v-if="product.category?.name">Категория: <span class="font-medium">{{ product.category.name }}</span></p>
        <p v-if="product.sizeValue && product.unit?.name">
          Размер:
          <span class="font-medium">
            {{ product.sizeValue }} {{ product.unit.name }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {}
})
</script>

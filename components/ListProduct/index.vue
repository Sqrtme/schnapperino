<template>
  <div 
    :class="[
      ' overflow-hidden hover:shadow-lg transition-all duration-300',
      even ? 'bg-gray-400' : 'bg-gray-300'
    ]"
  >
    <img v-if="product?.imageUrl" :src="product.imageUrl" alt="Product Image" class="w-full h-48 object-cover" />

    <div class="p-4 space-y-2">
      <h2 class="text-sm font-semibold text-gray-800"></h2>
      <p class="text-gray-500 text-sm truncate">{{ product.description }}</p>

      <div class="flex items-center justify-between mt-2">

      </div>

      <div class="text-sm text-black mt-2 space-y-1">
        <p class="flex justify-between items-center w-[500px]">
          <span>NAME:</span>
          <span>{{ product.name }}</span>
        </p>
        <p class="flex justify-between items-center w-[500px]">
          <span>PRICE:</span>
          <span class="text-lg font-bold text-green-600">{{ product.price.toFixed(2) }} € <span v-if="product.pfand">+Pfand</span></span>
        </p>
        <p class="flex justify-between items-center w-[500px]">
          <span>BRAND:</span>
          <span v-if="product.brand?.name" class="font-medium">{{ product.brand.name }}</span>
        </p>
        <p class="flex justify-between items-center w-[500px]">
          <span>CATEGORY:</span>
          <span v-if="product.category?.name" class="font-medium">{{ product.category.name }}</span>
        </p>
        <p class="flex justify-between items-center w-[500px]">
          <span>SIZE:</span>
          <span class="font-medium" v-if="product.sizeValue && product.unit?.name">
            {{ parseFloat(product.sizeValue).toFixed(2) }} {{ product.unit.short }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {},
  even: false,
})
</script>

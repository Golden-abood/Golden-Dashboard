<template>
  <div>
    <v-icon color="grey" class="mb-2 cursor-pointer"
      >mdi-tray-arrow-down</v-icon
    >
    <div class="flex-col justify-center">
      <v-img width="70" class="mx-auto" :src="src"></v-img>
      <p class="py-4 text-center">my-file.{{ type }}</p>
    </div>
    <p class="my-2 text-sm font-medium text-[#808080]">{{ Author }}</p>
    <v-divider></v-divider>
    <div
      class="mt-3 flex justify-space-between font-medium text-sm text-[#808080]"
    >
      <span>{{ date }}</span>
      <v-spacer></v-spacer>
      <span>{{ size }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps(["type", "Author", "size", "date", "src"]);
</script>

<style scoped></style>

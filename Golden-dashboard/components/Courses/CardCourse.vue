<template>
  <v-card class="overflow-hidden">
    <div class="relative">
      <v-img class="rounded-[10px] relative z-0" :src="bg">
        <v-img
          class="absolute top-[10px] left-[20px] w-[60px] h-[60px] rounded-full z-[999] border-[2px] border-solid !borded-white"
          :src="avatar"
        ></v-img
      ></v-img>
    </div>
    <v-card-text
      class="p-[15px] flex-col justify-start items-start relative border-b-[1px] border-b-solid border-b-[#888] mt-5"
    >
      <h3 class="pb-3 text-[17px]">{{ title }}</h3>
      <p class="pb-5 font-medium text-[15px] text-[#888]">{{ desc }}</p>
      <v-btn
        color="#0075ff"
        class="absolute bottom-[-30px] !left-[50%] !translate-x-[-50%] !w-[100px] !h-[30px] !text-[12px] !text-[#fff] !capitalize"
        >Course Info</v-btn
      >
    </v-card-text>
    <div
      class="flex justify-space-between text-[#888] text-[15px] font-medium my-6 py-0 px-[15px]"
    >
      <span class="flex justify-space-between">
        <v-icon class="mr-2">mdi-account</v-icon><v-spacer></v-spacer
        ><span>{{ num }}</span>
      </span>
      <span>$ {{ salary }}</span>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps(["title", "desc", "num", "salary", "bg", "avatar"]);
</script>

<style scoped>
</style>

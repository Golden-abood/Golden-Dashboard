<template>
  <div class="relative">
    <div class="absolute top-[-15px] p-[10px] relative mb-1"></div>
    <div class="flex-col text-center justify-center items-center p-0 m-0">
      <img :src="photo" width="100" class="rounded-circle mb-3" />
      <div class="pb-4">
        <h4 class="text-lg">{{ title }}</h4>
        <p class="text-[#888] text-[12px] font-medium pt-2">{{ job }}</p>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="my-4">
      <p class="mb-4 text-[13px] font-semibold">
        <v-icon class="mr-2">mdi-emoticon</v-icon>
        <span>{{ fr }} Friends</span>
      </p>
      <p class="mb-4 mb-4 text-[13px] font-semibold">
        <v-icon class="mr-2">mdi-arrow-projectile</v-icon>
        <span>{{ pro }} Projects</span>
      </p>
      <p class="mb-4 mb-4 text-[13px] font-semibold">
        <v-icon class="mr-2">mdi-message-text-outline</v-icon>
        <span>{{ ar }} Articles</span>
      </p>
    </div>
    <v-divider></v-divider>
    <div class="flex justify-space-between items-center mt-4">
      <span class="text-[12px] font-semibold text-[#888]">{{ date }}</span>
      <div class="flex">
        <v-btn
          color="#0075ff"
          class="!text-[#fff] !w-[30px] !text-[10px] !rounded-[15px] !py-[3px] !px-[10px] mr-3"
          >Profile</v-btn
        >
        <v-btn
          @click="removeFriend(friend.id)"
          color="#f44336"
          class="!text-[#fff] !w-[30px] !text-[10px] !rounded-[15px] !py-[3px] !px-[10px]"
          >Remove</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "job", "fr", "pro", "ar", "photo", "date", "friend"]);
</script>

<style scoped>
.friend .top {
}
</style>

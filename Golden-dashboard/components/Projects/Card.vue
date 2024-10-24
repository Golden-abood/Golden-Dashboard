<template>
  <div>
    <span
      class="absolute top-0 right-0 p-[15px] text-[#888] text-[13px] font-semibold"
      >15/10/2021</span
    >
    <div class="mt-3">
      <h4 class="mb-3 text-[15px] font-semibold leading-1">{{ title }}</h4>
      <p class="font-normal text-[#888] text-[13px]">{{ desc }}</p>
    </div>
    <div class="flex justify-start items-center my-8 middle">
      <v-img class="pho" src="/images/team-01.png"></v-img>
      <v-img class="pho" src="/images/team-02.png"></v-img>
      <v-img class="pho" src="/images/team-03.png"></v-img>
      <v-img v-show="one" class="pho" src="/images/team-04.png"></v-img>
      <v-img v-show="two" class="pho" src="/images/team-05.png"></v-img>
    </div>
    <v-divider></v-divider>
    <div class="flex justify-end items-center py-5">
      <span
        class="ml-[5px] text-[13px] bg-[#eee] rounded-[15px] py-[5px] px-[10px] font-medium"
        v-show="pro"
        >programming</span
      >
      <span
        class="ml-[5px] text-[13px] bg-[#eee] rounded-[15px] py-[5px] px-[10px] font-medium"
        v-show="design"
        >Design</span
      >
      <span
        class="ml-[5px] text-[13px] bg-[#eee] rounded-[15px] py-[5px] px-[10px] font-medium"
        v-show="host"
        >Hosting</span
      >
      <span
        class="ml-[5px] text-[13px] bg-[#eee] rounded-[15px] py-[5px] px-[10px] font-medium"
        v-show="market"
        >Marketing</span
      >
    </div>
    <v-divider></v-divider>
    <div class="flex justify-space-between items-center mt-5">
      <div class="bg-[#eee] w-[50%] h-[10px] rounded-[10px] relative z-[2]">
        <span
          class="h-[10px] absolute z-[1000] rounded-[10px]"
          :style="{ width: w, backgroundColor: bg }"
        ></span>
      </div>
      <p class="text-[#888] text-[13px] font-semibold">$ 1800</p>
    </div>
  </div>
</template>

<script setup>
defineProps([
  "one",
  "two",
  "pro",
  "market",
  "design",
  "host",
  "title",
  "desc",
  "w",
  "bg",
]);
</script>

<style scoped>
.date {
}

.top h4 {
}
.top p {
}
.middle {
}
.middle .pho {
  width: 20px;
  margin-right: -15px;
  border-radius: 50%;
  max-width: 7%;
  border: 2px solid white;
  transition: 0.3s;
}
.middle .pho:hover {
  z-index: 100;
}
.jobs {
}

.bott {
}

.bott p {
  color: #888;
  font-size: 13px;
  font-weight: 600;
}
</style>

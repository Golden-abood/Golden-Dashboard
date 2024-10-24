<template>
  <div
    class="special-card bg-[#fff] p-[25px] mr-[250px] mt-[45px] w-[300px] rounded-md h-fit"
  >
    <h4 class="text-lg text-left mb-[20px]">Files Statistics</h4>
    <div
      v-for="item in countFiles"
      class="flex justify-start items-center mb-[15px] border-solid border-[#eee] border-[2px] rounded-lg p-[10px]"
    >
      <div>
        <v-icon :color="item.color" class="mr-3" :class="bg - [item.color]">{{
          item.icon
        }}</v-icon>
      </div>
      <div class="flex-col justify-space-between items-center">
        <p class="text-sm font-bold">{{ item.title }}</p>
        <span class="text-[#666] text-sm mt-[10px] font-medium">{{
          item.count
        }}</span>
      </div>
      <v-spacer></v-spacer>
      <span class="text-[#666] text-sm font-medium">{{ item.weight }}</span>
    </div>
    <div class="text-center">
      <v-btn color="primary" prepend-icon="mdi-arrow-expand-up" size="small">
        Upload
      </v-btn>
    </div>
  </div>
</template>

<script setup>
const countFiles = ref([
  {
    title: "PDF Files",
    count: "130 Files",
    weight: "6.5GB",
    icon: "mdi-file-pdf-box",
    color: "lightPrimary",
  },
  {
    title: "Images",
    count: "115 Files",
    weight: "3.5GB",
    icon: "mdi-image-size-select-actual",
    color: "lightSuccess",
  },
  {
    title: "Word Files",
    count: "110 Files",
    weight: "3.2GB",
    icon: "mdi-file-word",
    color: "lightError",
  },
  {
    title: "CSV Files",
    count: "99 Files",
    weight: "3.2GB",
    icon: "mdi-file-word",
    color: "lightWarning",
  },
]);
</script>

<style scoped></style>

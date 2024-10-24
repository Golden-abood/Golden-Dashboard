<template>
  <div>
    <div class="flex flex-wrap justify-space-between items-start mb-[40px]">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[60%] mt-[45px] gap-[20px]"
      >
        <div
          v-for="file in fileStore.files"
          :key="file.i"
          class="bg-[#fff] p-[10px] rounded-md flex-col"
        >
          <FilesCardFile
            :type="file.type"
            :Author="file.Author"
            :size="file.size"
            :date="file.date"
            :src="file.src"
          />
        </div>
      </div>
      <FilesSide />
    </div>
  </div>
</template>

<script setup>
import { useFilesStore } from "~/stores/file";
const fileStore = useFilesStore();
</script>

<style scoped></style>

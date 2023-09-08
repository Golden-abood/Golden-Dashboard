<template>
  <div>
    <div class="mt-[40px] mr-[50px] md:mr-[0] pb-10 overflow-hidden">
      <div
        class="grid xl:grid-cols-4 w-[85%] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] p-[15px]"
      >
        <div
          class="bg-[#fff] overflow-hidden rounded-[10px] relative text-left"
          v-for="course in courseStore.courses"
          :key="course.i"
        >
          <CoursesCardCourse
            :title="course.title"
            :desc="course.desc"
            :num="course.num"
            :salary="course.salary"
            :bg="course.bg"
            :avatar="course.avatar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCourseStore } from "../stores/course";
const courseStore = useCourseStore();
</script>

<style scoped></style>

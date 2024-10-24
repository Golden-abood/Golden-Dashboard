<template>
  <div>
    <div class="my-[40px] mr-[50px] md:mr-0">
      <div class="grid w-[83%] xl:grid-cols-2 grid-cols-1 gap-[20px]">
        <div
          class="bg-[#fff] p-[20px] relative rounded-[10px]"
          v-for="project in projectStore.projects"
          :key="project.id"
        >
          <ProjectsCard
            :one="project.one"
            :two="project.two"
            :pro="project.pro"
            :market="project.market"
            :design="project.design"
            :host="project.host"
            :title="project.title"
            :desc="project.desc"
            :w="project.w"
            :bg="project.bg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from "~/stores/project";
const projectStore = useProjectStore();
</script>

<style scoped>
.projects {
}
.project {
}
</style>

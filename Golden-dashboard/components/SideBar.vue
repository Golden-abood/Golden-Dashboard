<template>
  <div class="!w-[60px] md:!w-[230px] relative z-[100]">
    <v-card class="!bg-[#353535]">
      <v-layout>
        <v-navigation-drawer
          class="box !border-0 !w-[60px] md:!w-[230px]"
          theme="light"
          permanent
        >
          <div class="text-center">
            <v-btn class="mt-5 text-center" color="primary"> Golden </v-btn>
          </div>
          <v-list nav color="transparent " class="mt-10 mb-[100px]">
            <v-list-item
              class="my-[-4px] !py-4"
              color="dark"
              v-for="link in links"
              :prepend-icon="link.icon"
              :title="link.title"
              :to="link.to"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    title: "Dashboard",
    to: "/",
    icon: "mdi-view-dashboard",
  },
  {
    title: "Settings",
    to: "/Settings",
    icon: "mdi-cog",
  },
  {
    title: "Profile",
    to: "/Profile",
    icon: "mdi-account",
  },
  {
    title: "Projects",
    to: "/Projects",
    icon: "mdi-git",
  },
  {
    title: "Courses",
    to: "/Courses",
    icon: "mdi-account-school",
  },
  {
    title: "Friends",
    to: "/Friends",
    icon: "mdi-account-group-outline",
  },
  {
    title: "Files",
    to: "/Files",
    icon: "mdi-file-account-outline",
  },
  {
    title: "Plans",
    to: "/Plans",
    icon: "mdi-floor-plan",
  },
]);
</script>

<style scoped>
.box {
  box-shadow: 0 0 10px #777;
}
</style>

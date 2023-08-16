<template>
  <div>
    <!--
    <v-layout>
      <v-navigation-drawer class="!border-0">
 
      </v-navigation-drawer>-->
    <v-card>
      <v-layout>
        <v-navigation-drawer
          class="bg-white !border-0 !w-[60px] md:!w-[230px]"
          theme="light"
          permanent
        >
          <div class="text-center">
            <v-btn class="mt-5 text-center"> Golden AboodS </v-btn>
          </div>
          <v-list nav color="transparent " class="mt-10 mb-[100px] box">
            <v-list-item
              color="black"
              class="font-bold"
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
    to: "/Dashboard",
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
  border-left: 2px solid blue;
}
</style>

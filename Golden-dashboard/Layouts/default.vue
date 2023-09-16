<template>
  <div class="flex justify-start">
    <SideBar />
    <div>
      <NavBar class="ms-[60px] md:!ms-[230px]" />

      <div
        class="w-screen bg-light min-h-screen mt-[60px] ml-[60px] md:!ml-[200px] py-4 pl-14"
      >
        <div class="flex items-center justify-between">
          <h2
            class="mt-8 font-bold text-3xl relative after:content-[''] after:absolute after:bottom-[-10px] after:left-[30px] after:bg-[#fff] after:w-[150px] after:h-[3px] after:rounded-lg before:absolute before:content-[''] before:bottom-[-10px] before:left-[0px] before:rounded-lg z-100 before:bg-[#333] before:w-[30px] before:h-[3px]"
          >
            {{ $route.name === "index" ? "Dashboard" : $route.name }}
          </h2>
          <div class="text-right mr-[250px]">
            <v-btn
              v-if="
                $route.name != 'Plans' &&
                $route.name != 'index' &&
                $route.name != 'Settings' &&
                $route.name != 'Profile'
              "
              color="primary"
              class="!capitalize"
              @click="$router.replace(`/${$route.name}/create`)"
              >Add {{ $route.name.slice(0, $route.name.length - 1) }}</v-btn
            >
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

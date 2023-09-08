<template>
  <div class="flex justify-start">
    <SideBar />
    <div>
      <NavBar class="ml-[60px] md:!ml-[230px]" />

      <div
        class="w-screen bg-light min-h-screen mt-[60px] ml-[60px] md:!ml-[200px] py-4 pl-14"
      >
        <div class="">
          <h2
            class="mt-8 font-bold text-2xl relative after:content-[''] after:absolute after:bottom-[-10px] after:left-[30px] after:bg-[#fff] after:w-[150px] after:h-[3px] after:rounded-lg before:absolute before:content-[''] before:bottom-[-10px] before:left-[0px] before:rounded-lg z-100 before:bg-[#333] before:w-[30px] before:h-[3px]"
          >
            {{ $route.name === "index" ? "Home" : $route.name }}
          </h2>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

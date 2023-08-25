<template>
  <div class="flex justify-start">
    <SideBar />
    <div>
      <NavBar class="ml-[60px] md:!ml-[230px]" />

      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.side {
}
.nav {
}
</style>

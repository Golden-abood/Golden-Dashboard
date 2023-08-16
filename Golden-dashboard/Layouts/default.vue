<template>
  <div class="w-screen block md:flex ml-5 md:ml-0">
    <SideBar class="side flex-1 relative z-10 " />
    <NavBar class="nav" />
  </div>
  <div>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.side {
  flex: 15% 0 0;
}
.nav {
  flex: 95% 0% 0%;
}
</style>

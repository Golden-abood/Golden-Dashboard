<template>
  <div class="lg:!w-[82%]">
    <v-toolbar color="#fff" class="flex items-center">
      <v-toolbar-title>
        <form>
          <span class="relative">
            <v-icon
              size="sm"
              class="absolute top-0 left-[40px] display-1 text-[#666] mr-3"
              >mdi-magnify</v-icon
            >

            <input
              type="text"
              class="pl-8 border-[1px] border-solid border-[#ccc] rounded-[7px] w-[150px] text-xs py-2 px-6"
              placeholder="Type A Kewyord"
            />
          </span>
        </form>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="flex gap-x-2 items-center">
        <v-btn icon>
          <v-icon>mdi-bell-badge-outline</v-icon>
        </v-btn>
        <v-avatar right>
          <v-img src="images/avatar.png" alt="avatar" />
        </v-avatar>
      </div>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
input {
  transition: 0.3s;
}
input:focus {
  width: 200px;
}
*:focus {
  outline: none;
}
</style>

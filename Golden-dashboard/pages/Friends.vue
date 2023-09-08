<template>
  <div>
    <div class="mt-[40px] xl:mr-[50px] mr-[20px]">
      <div
        class="grid w-[85%] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[20px]"
      >
        <div
          v-for="friend in friendStore.friends"
          :key="friend.index"
          class="bg-[#fff] p-[20px] rounded-[10px]"
        >
          <FriendsCard
            :title="friend.title"
            :job="friend.job"
            :fr="friend.fr"
            :pro="friend.pro"
            :ar="friend.ar"
            :date="friend.date"
            :photo="friend.photo"
            :friend="friend"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFriendStore } from "~/stores/friend";
const friendStore = useFriendStore();
</script>

<style scoped>
.container {
}
.friends {
}
.friend {
}
</style>

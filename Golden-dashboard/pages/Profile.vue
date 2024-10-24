<template>
  <div class="mt-[40px] xl:mr-[0] mr-[40px]">
    <v-card flat class="w-[84%] flex-col jsutify-start gap-x-10">
      <div class="flex p-6">
        <div class="flex-col w-[17%] text-center pt-[60px] pr-7">
          <v-img src="/images/avatar.png" class="w-[70%] mx-auto my-5"></v-img>
          <h3 class="">Golden abood</h3>
          <p class="text-[#666] font-medium my-1">Front End</p>
          <div
            class="bg-[#eee] mx-auto w-[90%] my-1 h-[7px] rounded-[10px] relative z-1"
          >
            <span
              class="bg-primary h-[7px] absolute z-1000 top-0 left-0 w-[70%] rounded-[10px]"
            ></span>
          </div>
          <v-icon v-for="item in 5" size="small" color="#f59e0b" class="my-1"
            >mdi-star</v-icon
          >

          <div class="text-[#666] my-2 text-sm">550 Rating</div>
        </div>
        <v-divider vertical></v-divider>
        <v-table class="flex-col w-[70%] pl-10">
          <tr
            v-for="item in items"
            class="!border-b-solid !border-b-[#ddd] !border-b-[1px]"
          >
            <td>
              <p class="text-[#888] font-medium my-1">{{ item.title }}</p>
              <h5 class="text-[#888]">
                {{ item.labelName }}
                <span class="text-[#333] my-0"> {{ item.name }} </span>
              </h5>
              <v-switch color="primary" v-model="item.switch"></v-switch>
            </td>
            <td class="mt-[0]">
              <h5 class="text-[#888]">
                {{ item.labelTwo }}
                <span class="text-[#333]">{{ item.two }}</span>
              </h5>
            </td>
            <td>
              <h5 class="text-[#888]">
                {{ item.labelThree }}
                <span class="text-[#333]">{{ item.three }}</span>
              </h5>
            </td>
          </tr>
        </v-table>
      </div>
    </v-card>

    <div class="w-[84%] flex justify-start gap-[20px] mt-[30px]">
      <v-card flat class="!p-3 w-full xl:w-[45%] !pb-6">
        <v-card-title class="!text-2xl !text-[#333] !font-bold"
          >My Skills</v-card-title
        >
        <p class="pl-4 mb-10 text-[#888] text-base mt-[-5px]">
          Complete Skills List
        </p>
        <div v-for="(expert, index) in experts">
          <v-divider v-if="index != 0"></v-divider>
          <v-chip
            label
            v-for="item in expert.title.map((e) => e)"
            class="mr-3 my-3"
          >
            {{ item }}
          </v-chip>
        </div>
      </v-card>
      <v-card flat class="!p-3 w-full">
        <v-card-title class="!text-2xl !text-[#333] !font-bold"
          >Latest Activities</v-card-title
        >
        <p class="pl-4 mb-10 text-[#888] text-base mt-[-5px]">
          Latest Activities Done By The User
        </p>

        <div
          class="flex justify-space-between items-center border-b-[1px] border-b-[#eee] border-b-solid"
          v-for="activity in activites"
        >
          <div class="flex items-center gap-x-2 my-3">
            <v-img class="w-[70px]" :src="activity.photo"></v-img>
            <div>
              <h3 class="text-[18px] font-normal">{{ activity.title }}</h3>
              <p class="text-base font-medium text-[#888]">
                {{ activity.text }}
              </p>
            </div>
          </div>
          <div class="text-center">
            <h3 class="text-base font-medium">{{ activity.time }}</h3>
            <p class="text-[#888]">{{ activity.date }}</p>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    title: "General Information",
    name: "Golden abood",
    switch: true,
    two: "Male",
    three: "Egypt",
    labelName: "Full Name:",
    labelTwo: "Gender:",
    labelThree: "Country:",
  },
  {
    title: "Personal Information",
    name: "G@ab.za",
    switch: false,
    two: "019123456789",
    three: "25/10/1982",
    labelName: "Email:",
    labelTwo: "Phone:",
    labelThree: "Date Of Birth:",
  },
  {
    title: "Job Information",
    name: "Full Stack Developer",
    switch: true,
    two: "Python",
    three: "+15",
    labelName: "Title:",
    labelTwo: "Programming Language:",
    labelThree: "Years Of Experience:",
  },
  {
    title: "Billing Information",
    name: "Paypal",
    switch: false,
    two: "email@website.com",
    three: "Monthly",
    labelName: "Paypal:",
    labelTwo: "Email:",
    labelThree: "Subscription:",
  },
]);
const experts = ref([
  {
    title: ["HTML", "Pusjs", "HAML"],
  },
  {
    title: ["CSS", "SASS", "Stylus"],
  },
  {
    title: ["JavaScript", "TypeScript"],
  },
  {
    title: ["Vuejs", "Reactjs"],
  },
  {
    title: ["Jest", "Jasmine"],
  },
  {
    title: ["PHP", "Laravel"],
  },
  {
    title: ["Python", "Django"],
  },
]);
const activites = ref([
  {
    title: "Store",
    photo: "/images/activity-01.png",
    text: "Bought The Mastering Python Course",
    time: "18:10",
    date: "Yesterday",
  },

  {
    title: "Academy",
    photo: "/images/activity-02.png",
    text: "Got The PHP Certificate",
    time: "16:05",
    date: "Yesterday",
  },

  {
    title: "Badges",
    photo: "/images/activity-03.png",
    text: "Unlocked The 10 Skills Badge",
    time: "18:05",
    date: "Yesterday",
  },

  {
    title: "Store",
    photo: "/images/activity-01.png",
    text: "Bought The Typescript Course",
    time: "12:05",
    date: "Yesterday",
  },
]);
</script>

<style scoped>
.card {
  box-shadow: 0 0 5px #666;
}
</style>

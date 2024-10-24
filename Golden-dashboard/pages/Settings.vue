<template>
  <div class="mt-[40px] mr-[50px] xl:mr-2">
    <div class="w-[84%] grid xl:grid-cols-2 gap-[20px] grid-cols-1">
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Site Control
        </v-card-title>

        <p class="px-4 text-[#888]">
          Control The Website If There Is Maintenance
        </p>
        <div class="px-4 flex justify-space-between items-center">
          <div class="!py-5">
            <h6 class="text-base">Website Control</h6>
            <p class="text-sm text-[#888]">
              Open/Close Website And Type The Reason
            </p>
          </div>
          <div>
            <v-switch color="primary"> </v-switch>
          </div>
        </div>
        <v-textarea
          clearable
          variant="outlined"
          placeholder="Close Message Content ... "
          class="px-3 !outline-[#888]"
        >
        </v-textarea>
      </v-card>
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl"
          >General Info
        </v-card-title>
        <p class="px-4 text-[#888]">General Information About Your Account</p>

        <v-form class="px-4 my-4">
          <div v-for="(item, index) in items">
            <v-label class="mb-2 font-normal text-xs"
              >{{ item.label }}
            </v-label>
            <div class="flex items-center">
              <input
                :placeholder="item.label"
                :class="{ 'w-[50%]': index === 2, 'bg-light': index === 2 }"
                :disabled="index === 2"
                class="border-[1px] mb-2 border-solid border-[#ddd] rounded-md w-full py-2 px-3 text-xs"
              />
              <v-btn
                v-if="index === 2"
                variant="text"
                color="primary"
                class="!capitalize !text-sm !font-bold"
                >Change
              </v-btn>
            </div>
          </div>
        </v-form>
      </v-card>
    </div>
    <div class="w-[84%] grid xl:grid-cols-2 gap-[20px] grid-cols-1 mt-[30px]">
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Security Info
        </v-card-title>

        <p class="px-4 text-[#888]">Security Information About Your Account</p>

        <div class="px-4 mt-5 flex justify-space-between pb-4">
          <div class="flex-col">
            <p class="font-medium text-lg">Password</p>
            <p class="text-sm text-[#888]">Last Change On 25/10/2021</p>
          </div>
          <v-btn color="primary" class="!rounded-lg !capitalize !font-medium">
            Change</v-btn
          >
        </div>
        <v-divider></v-divider>
        <div class="px-4 mt-5 flex justify-space-between">
          <div class="flex-col">
            <p class="font-medium text-lg">Two-Factor Authentication</p>
            <p class="text-sm text-[#888]">Enable/Disable The Feature</p>
          </div>
          <div>
            <v-switch color="primary"></v-switch>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="px-4 mt-5 flex justify-space-between pb-4">
          <div class="flex-col">
            <p class="font-medium text-lg">Devices</p>
            <p class="text-sm text-[#888]">Check The Login Devices List</p>
          </div>
          <v-chip class="!rounded-lg !capitalize !font-bold text-lg">
            Devices</v-chip
          >
        </div>
      </v-card>
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Social Info
        </v-card-title>

        <p class="px-4 text-[#888]">Social Media Information</p>

        <div
          v-for="social in socilas"
          class="flex gap-x-2 items-center mx-4 bg-[#f6f6f6] my-4 border-solid border-[1px] border-[#888] rounded-lg"
        >
          <v-icon
            color="#888"
            class="w-[10p%] border-r-[1px] border-r-solid border-r-[#888] py-5 px-5"
            >{{ social.icon }}</v-icon
          >
          <input
            type="text"
            :placeholder="social.placeholder"
            class="py-2 w-[90%] text-xs focus:outline-0"
          />
        </div>
      </v-card>
    </div>
    <div class="w-[84%] grid xl:grid-cols-2 gap-[20px] grid-cols-1 mt-[30px]">
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Widgets Control
        </v-card-title>

        <p class="px-4 text-[#888]">Show/Hide Widgets</p>

        <div class="px-4">
          <div
            v-for="check in checks"
            class="flex gap-x-3 items-center mt-[40px]"
          >
            <v-checkbox
              color="primary"
              :label="check.title"
              class="my-[-40px] !text-[#000]"
            >
            </v-checkbox>
          </div>
        </div>
      </v-card>
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Backup Manager
        </v-card-title>

        <p class="px-4 text-[#888]">Control Backup Time And Location</p>

        <div class="px-4">
          <v-radio-group class="mt-6">
            <v-radio
              color="primary"
              class="!text-[#000]"
              label="Daily"
              value="1"
            ></v-radio>
            <v-radio
              color="primary"
              class="!text-[#000]"
              label="Weekly"
              value="2"
            ></v-radio>
            <v-radio
              color="primary"
              class="!text-[#000]"
              label="Monthly"
              value="3"
            ></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-tabs class="mt-4">
            <v-tab v-for="tab in tabs" class="mx-auto" value="one">
              <div>
                <v-icon class="mb-1">mdi-server</v-icon>
                <p>{{ tab.title }}</p>
              </div>
            </v-tab>
          </v-tabs>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    label: "First Name",
  },
  {
    label: "Last Name",
  },
  {
    label: "Email",
  },
]);

const socilas = ref([
  {
    icon: "mdi-twitter",
    placeholder: "Twitter Username ",
  },
  {
    icon: "mdi-facebook",
    placeholder: "Facebook Username ",
  },
  {
    icon: "mdi-linkedin",
    placeholder: "Linkedin Username ",
  },
  {
    icon: "mdi-youtube",
    placeholder: "Youtube Username ",
  },
]);

const checks = ref([
  {
    title: "Quick Draft",
  },
  {
    title: "Yearly Targets",
  },
  {
    title: "Tickets Statistics",
  },
  {
    title: "Latest News",
  },
  {
    title: "Latest Tasks",
  },
  {
    title: "Top Search Items",
  },
]);

const tabs = ref([
  {
    title: "Megaman",
  },
  {
    title: "Zero",
  },
  {
    title: "Sigma",
  },
]);
</script>

<style scoped></style>

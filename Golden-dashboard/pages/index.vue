<template>
  <div class="mr-[40px] xl:mr-0">
    <div class="w-[84%] grid xl:grid-cols-2 gap-[20px] grid-cols-1 mt-[40px]">
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Welcome
        </v-card-title>

        <p class="px-4 text-[#888]">Elzero</p>
      </v-card>
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Quick Draft
        </v-card-title>

        <p class="px-4 text-[#888]">Write A Draft For Your Ideas</p>

        <div class="px-4 mt-4">
          <input
            placeholder="title"
            class="border-[1px] mb-2 border-solid border-[#ddd] bg-[#eeeeee] rounded-md w-full py-2 px-3 text-xs"
          />
          <textarea
            rows="10"
            placeholder="Your Tought"
            class="!bg-[#eee] mt-3 rounded-lg pt-3 w-full px-3 border-solid border-[#ddd] border-[1px] text-[#888] text-xs"
          >
          </textarea>
        </div>
        <div class="px-4 text-right mt-2">
          <v-btn class="!capitalize" color="primary">save</v-btn>
        </div>
      </v-card>
    </div>
    <div class="w-[84%] grid xl:grid-cols-2 gap-[20px] grid-cols-1 mt-[40px]">
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Yearly Targets
        </v-card-title>

        <p class="px-4 text-[#888]">Targets Of The Year</p>

        <div class="mt-4">
          <div v-for="item in items" class="px-4 flex gap-x-4">
            <span :class="item.background" class="p-7 my-2">
              <v-icon :color="item.color">{{ item.icon }}</v-icon></span
            >
            <div class="mt-4 relative">
              <p class="text-[#888] text-base">{{ item.title }}</p>
              <span class="font-bold text-sm">{{ item.price }}</span>
              <div
                :class="item.bgTwo"
                class="md:w-[480px] w-[220px] h-[10px] rounded-[10px] relative z-[2]"
              >
                <span
                  class="h-[10px] absolute z-[1000] rounded-[10px]"
                  :style="{ width: item.w, backgroundColor: item.bg }"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </v-card>
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Tickets Statistics
        </v-card-title>

        <p class="px-4 text-[#888]">Everything About Support Tickets</p>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-5 px-4 mt-[30px]">
          <div
            v-for="support in supports"
            class="p-4 py-6 border-solid border-[1px] text-center border-[#888] rounded-lg"
          >
            <div class="flex-col">
              <v-icon size="x-large" class="my-2" :color="support.color">{{
                support.icon
              }}</v-icon>
              <div>
                <p class="font-bold text-2xl">{{ support.count }}</p>
                <p class="text-[#888] text-xs">{{ support.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="w-[84%] grid xl:grid-cols-2 gap-[20px] grid-cols-1 mt-[40px]">
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Latest News
        </v-card-title>
        <div class="px-4">
          <div
            v-for="(item, index) in news"
            class="flex justify-space-between py-4"
            :class="
              index != 3 ? 'border-b-solid border-b-[1px] border-b-[#ddd]' : ''
            "
          >
            <div class="flex gap-x-5">
              <v-img width="100" class="rounded-lg" :src="item.photo"></v-img>
              <div>
                <h3 class="text-[#000] text-base font-semibold">
                  {{ item.title }}
                </h3>
                <p class="text-[#888] text-sm">
                  {{ item.text }}
                </p>
              </div>
            </div>
            <div>
              <v-chip size="medium" label class="text-xs py-1 px-2"
                >{{ item.count }} Days Ago</v-chip
              >
            </div>
          </div>
        </div>
      </v-card>
      <v-card flat class="!py-3 !rounded-xl">
        <div class="flex justify-between">
          <v-card-title class="!text-[#333] !font-bold !text-2xl">
            Latest Tasks
          </v-card-title>
          <v-dialog transition="dialog-bottom-transition" width="500px">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                color="primary"
                class="mr-5"
                size="small"
                prepend-icon="mdi-plus"
                >Add Task</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar color="primary" title="Add New Task"></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pt-6 pb-4 px-3">
                    <v-text-field
                      v-model="task.title"
                      label="title"
                      variant="outlined"
                    ></v-text-field>
                    <v-text-field
                      v-model="task.text"
                      label="title"
                      variant="outlined"
                    >
                    </v-text-field>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn
                    variant="tonal"
                    color="primary"
                    @click="
                      taskStore.addTask(task);
                      isActive.value = false;
                    "
                    >Save</v-btn
                  >
                  <v-btn variant="tonal" @click="isActive.value = false"
                    >Close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>

        <div
          v-for="(task, index) in tasks"
          class="px-4 flex justify-space-between py-3 border-b-[1px] border-[#eee] border-b-solid"
          :key="index"
          @click=""
        >
          <div>
            <h3
              :class="{
                'line-through': task.isDone,
                'text-[#888]': task.isDone,
              }"
              class="text-base font-bold text-[#000]"
            >
              {{ task.title }}
            </h3>
            <p
              :class="{
                'line-through': task.isDone,
                'text-[#888]': task.isDone,
              }"
              class="text-[#888] text-sm mt-2"
            >
              {{ task.text }}
            </p>
          </div>
          <div>
            <v-dialog transition="dialog-bottom-transition" width="500px">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  color="primary"
                  flat
                  variant="text"
                  size="small"
                >
                  <v-icon size="small">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar color="primary" title="update Task"></v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pt-6 pb-4 px-3">
                      <v-text-field
                        v-model="task.title"
                        label="title"
                        variant="outlined"
                      ></v-text-field>
                      <v-text-field
                        v-model="task.text"
                        label="title"
                        variant="outlined"
                      >
                      </v-text-field>
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      variant="tonal"
                      color="primary"
                      @click="
                        isActive.value = false;
                        taskStore.updateTask(task, index);
                      "
                      >Save</v-btn
                    >
                    <v-btn variant="tonal" @click="isActive.value = false"
                      >Close</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            <v-btn
              flat
              variant="text"
              color="lightError"
              @click="taskStore.deleteTask(index)"
              ><v-icon color="error">mdi-trash-can-outline</v-icon></v-btn
            >
          </div>
        </div>
      </v-card>
    </div>
    <div class="w-[84%] grid xl:grid-cols-2 gap-[20px] grid-cols-1 mt-[40px]">
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Top Search Items
        </v-card-title>
        <div class="flex justify-space-between px-4">
          <p class="text-[#888]">Keyword</p>
          <p class="text-[#888]">Search Count</p>
        </div>
        <div
          v-for="keyword in keywords"
          class="px-4 flex justify-space-between mt-[30px]"
        >
          <p class="font-medium text-[#000]">{{ keyword.title }}</p>
          <v-chip label size="large" class="!text-xs !font-bold">{{
            keyword.count
          }}</v-chip>
        </div>
      </v-card>
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Latest Uploads
        </v-card-title>
        <div class="mt-5">
          <div
            v-for="(upload, index) in uploads"
            class="px-4 flex justify-space-between items-center"
          >
            <div class="flex gap-x-3">
              <v-img :src="upload.photo" class="w-[13%] my-2"></v-img>
              <div class="w-[400px]">
                <h4>{{ upload.title }}</h4>
                <p class="text-[#888] text-sm">{{ upload.author }}</p>
              </div>
            </div>
            <v-chip label class="!font-bold" size="small"
              >{{ upload.size }}mb</v-chip
            >
          </div>
        </div>
      </v-card>
    </div>
    <div class="w-[84%] grid xl:grid-cols-2 gap-[20px] grid-cols-1 mt-[40px]">
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Last Project Progress
        </v-card-title>
        <div class="flex justify-space-between items-end mt-5">
          <v-timeline class="!text-left" side="end" align="start">
            <v-timeline-item
              v-for="project in projects"
              size="small"
              class="border-solid border-[#fff] border-[1px]"
              :dot-color="project.color"
            >
              <div class="d-flex">
                <strong class="me-4">{{ project.title }}</strong>
              </div>
            </v-timeline-item>
          </v-timeline>
          <div>
            <v-img
              class="w-[170px] opacity-10"
              src="/images/project.png"
            ></v-img>
          </div>
        </div>
      </v-card>
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Reminders
        </v-card-title>
        <div
          v-for="reminder in reminders"
          class="py-3 mt-5 px-16 relative before:content-[''] after:content-[''] before:absolute before:top-[20px] before:left-[20px] before:rounded-full before:w-[20px] before:h-[20px] before:text-[#888] after:absolute after:top-[5px] after:left-[50px] after:h-[60px] after:w-[2px]"
          :class="reminder.color"
        >
          <h4 class="mb-1">{{ reminder.title }}</h4>
          <p class="text-[#888] text-sm ml-2">
            {{ reminder.date }} - {{ reminder.time }}
          </p>
        </div>
      </v-card>
    </div>
    <div class="w-[84%] grid xl:grid-cols-2 gap-[20px] grid-cols-1 mt-[40px]">
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Latest Post
        </v-card-title>
        <div class="px-4 mt-5">
          <div class="flex pb-6 gap-x-4 items-center">
            <div>
              <v-img class="!w-[50px]" src="/images/avatar.png"></v-img>
            </div>
            <div>
              <h3 class="text-[16px] text-[#000]">Osama Elzero</h3>
              <p class="text-[#888] text-md">About 3 Hours Ago</p>
            </div>
          </div>
          <v-divider></v-divider>
          <p class="mt-6 font-semibold pb-12">
            You Can Fool All Of The People Some Of The Time, And Some Of The
            People All Of The Time, But You Can't Fool All Of The People All Of
            The Time.
          </p>
          <v-divider></v-divider>
          <div class="flex justify-space-between py-5">
            <div class="flex gap-x-1">
              <v-icon color="#888">mdi-heart-outline</v-icon>
              <span class="text-[#888]">1.8K</span>
            </div>
            <div class="flex gap-x-1">
              <v-icon color="#888">mdi-chat-plus-outline</v-icon>
              <span class="text-[#888]">500</span>
            </div>
          </div>
        </div>
      </v-card>
      <v-card flat class="!py-3 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          Social Media Stats
        </v-card-title>
        <div class="px-4 mt-5">
          <div
            v-for="social in socials"
            :class="social.back"
            class="flex justify-between items-center mb-3"
          >
            <div class="flex gap-x-5 items-center">
              <div :class="social.backicon">
                <v-icon
                  color="white"
                  size="x-large"
                  class="!w-[50px] !h-[60px]"
                  >{{ social.icon }}</v-icon
                >
              </div>
              <span class="font-medium" :style="`color : ${social.color}`">{{
                social.title
              }}</span>
            </div>
            <v-btn
              size="small"
              class="me-4 leading-0 !text-[#fff] !font-bold"
              :color="social.color"
              >{{ social.btnText }}</v-btn
            >
          </div>
        </div>
      </v-card>
    </div>
    <div class="w-[84%] grid gap-[20px] grid-cols-1 mt-[40px]">
      <v-card flat class="!py-3 !pb-10 !rounded-xl"
        ><v-card-title class="!text-[#333] !font-bold !text-2xl">
          projects
        </v-card-title>
        <div class="px-4 mt-5">
          <table class="w-full border-solid border-[1px] border-[#eee]">
            <th v-for="title in titles" class="text-left bg-[#eeeeee] p-3">
              {{ title }}
            </th>
            <tr v-for="list in lists">
              <td
                class="font-semibold text-[15px] px-4 py-6 border-y-solid border-y-[1px] border-y-[#eee] border-r-solid border-r-[1px] border-r-[#eee]"
              >
                {{ list.name }}
              </td>
              <td
                class="font-semibold text-[15px] px-4 py-6 border-y-solid border-y-[1px] border-y-[#eee] border-r-solid border-r-[1px] border-r-[#eee]"
              >
                {{ list.date }}
              </td>
              <td
                class="font-semibold text-[15px] px-4 py-6 border-y-solid border-y-[1px] border-y-[#eee] border-r-solid border-r-[1px] border-r-[#eee]"
              >
                {{ list.client }}
              </td>
              <td
                class="font-semibold text-[15px] px-4 py-6 border-y-solid border-y-[1px] border-y-[#eee] border-r-solid border-r-[1px] border-r-[#eee]"
              >
                {{ list.price }}
              </td>
              <td
                class="px-4 py-6 border-y-solid border-y-[1px] border-y-[#eee] border-r-solid border-r-[1px] border-r-[#eee]"
              >
                <div class="flex items-center gap-x-[-10px]">
                  <div v-for="avatar in list.avatars">
                    <img :src="avatar" class="rounded-full w-[30px]" />
                  </div>
                </div>
              </td>
              <td
                class="!font-semibold !text-[15px] px-4 py-6 border-y-solid border-y-[1px] border-y-[#eee] border-r-solid border-r-[1px] border-r-[#eee]"
              >
                <v-chip :color="list.status.color" size="small" label>{{
                  list.status.title
                }}</v-chip>
              </td>
            </tr>
          </table>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "~/stores/task";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);

const task = ref({
  title: null,
  text: null,
  isDone: false,
});
const items = ref([
  {
    icon: "mdi-currency-usd",
    color: "primary",
    background: "bg-lightPrimary",
    title: "Money",
    w: "80%",
    price: "$20.000",
    bg: "#0d69d5",
    bgTwo: "bg-lightPrimary",
  },
  {
    icon: "mdi-xml",
    color: "warning",
    background: "bg-lightWarning",
    title: "Projects",
    w: "55%",
    price: "24",
    bg: "#f59e0b",
    bgTwo: "bg-lightWarning",
  },
  {
    icon: "mdi-account",
    color: "success",
    background: "bg-lightSuccess",
    title: "Team",
    w: "75%",
    price: "12",
    bg: "#22c55e",
    bgTwo: "bg-lightSuccess",
  },
]);

const supports = ref([
  {
    icon: "mdi-list-box",
    count: "2500",
    text: "Total",
    color: "primary",
  },
  {
    icon: "mdi-loading",
    count: "500",
    text: "Pending",
    color: "warning",
  },
  {
    icon: "mdi-check-circle-outline",
    count: "1900",
    text: "Closed",
    color: "success",
  },
  {
    icon: "mdi-xamarin",
    count: "100",
    text: "Deleted",
    color: "error",
  },
]);
const news = ref([
  {
    title: "Created SASS Section",
    photo: "/images/news-01.png",
    text: "New SASS Examples & Tutorials",
    count: "3",
  },
  {
    title: "Changed The Design",
    photo: "/images/news-02.png",
    text: "A Brand New Website Design",
    count: "5",
  },
  {
    title: "Team Increased",
    photo: "/images/news-03.png",
    text: "3 Developers Joined The Team",
    count: "7",
  },
  {
    title: "Added Payment Gateway",
    photo: "/images/news-04.png",
    text: "Many New Payment Gateways Added",
    count: "9",
  },
]);

const keywords = ref([
  {
    title: "Programming",
    count: "220",
  },
  {
    title: "JavaScript",
    count: "180",
  },
  {
    title: "PHP",
    count: "160",
  },
  {
    title: "Code",
    count: "145",
  },
  {
    title: "Design",
    count: "110",
  },
  {
    title: "Logic",
    count: "95",
  },
]);

const uploads = ref([
  {
    title: "my-file.pdf",
    author: "Elzero",
    size: "2.9",
    photo: "/images/pdf.svg",
  },
  {
    title: "My-Video-File.avi",
    author: "Admin",
    size: "23.4",
    photo: "/images/avi.svg",
  },
  {
    title: "My-Psd-File.pdf",
    author: "Osama",
    size: "1.3",
    photo: "/images/psd.svg",
  },
  {
    title: "My-Zip-File.pdf",
    author: "User",
    size: "2.7",
    photo: "/images/zip.svg",
  },
  {
    title: "My-DLL-File.pdf",
    author: "Admin",
    size: "3.7",
    photo: "/images/dll.svg",
  },
  {
    title: "My-Eps-File.pdf",
    author: "Designer",
    size: "8.5",
    photo: "/images/eps.svg",
  },
]);
const projects = ref([
  {
    title: "Got The Project",
    color: "primary",
  },
  {
    title: "Started The Project",
    color: "primary",
  },
  {
    title: "The Project About To Finish",
    color: "primary",
  },
  {
    title: "Test The Project",
    color: "primary",
  },
  {
    title: "Finish The Project & Get Money",
    color: "white",
  },
]);

const reminders = ref([
  {
    title: "Check My Tasks List",
    date: "28/09/2022",
    time: "12:00am",
    color: "before:bg-[#0d69d5] after:bg-[#0d69d5]",
  },
  {
    title: "Check My Projects",
    date: "26/09/2022",
    time: "12:00am",
    color: "before:bg-[#22c55e] after:bg-[#22c55e]",
  },
  {
    title: "Call All My Clients",
    date: "5/11/2022",
    time: "12:00am",
    color: "before:bg-[#f59e0b] after:bg-[#f59e0b]",
  },
  {
    title: "Finish The Development Workshop",
    date: "28/10/2032",
    time: "12:00am",
    color: "before:bg-[#f44336] after:bg-[#f44336]",
  },
]);

const socials = ref([
  {
    icon: "mdi-twitter",
    backicon: "bg-[#1da1f2]",
    back: "bg-[#d2ecfc]",
    title: "90K Followers",
    btnText: "Follow",
    color: "#1da1f2",
  },
  {
    icon: "mdi-facebook",
    backicon: "bg-[#1877f2]",
    back: "bg-[#d1e4fc]",
    title: "2M Like",
    btnText: "Like",
    color: "#1877f2",
  },
  {
    icon: "mdi-youtube",
    backicon: "bg-[#ff0000]",
    back: "bg-[#ffcccc]",
    title: "1M Subs",
    btnText: "Subscribe",
    color: "#ff0000",
  },
  {
    icon: "mdi-linkedin",
    backicon: "bg-[#0077b5]",
    back: "bg-[#cce4f0]",
    title: "70K Followers",
    btnText: "Follow",
    color: "#0077b5",
  },
]);
const titles = ref([
  "Name",
  "Finish Date	",
  "Client",
  "	Price",
  "	Team",
  "Status",
]);
const lists = ref([
  {
    name: "Ministry Wikipedia	",
    date: "10 May 2022	",
    client: "Ministry",
    price: "$5300	",
    avatars: [
      "/images/team-01.png",
      "/images/team-02.png",
      "/images/team-03.png",
      "/images/team-04.png",
    ],
    status: {
      color: "warning",
      title: "Pending",
    },
  },
  {
    name: "Elzero Shop",
    date: "12 Oct 2021	",
    client: "Elzero Company	",
    price: "$1500	",
    avatars: [
      "/images/team-01.png",
      "/images/team-02.png",
      "/images/team-03.png",
    ],
    status: {
      color: "primary",
      title: "In Progress",
    },
  },
  {
    name: "Bouba App	",
    date: "05 Sep 2021		",
    client: "Bouba	",
    price: "$800	",
    avatars: ["/images/team-01.png", "/images/team-02.png"],
    status: {
      color: "success",
      title: "Completed",
    },
  },
  {
    name: "Mahmoud Website	",
    date: "22 May 2021	",
    client: "Mahmoud",
    price: "$600	",
    avatars: ["/images/team-01.png", "/images/team-02.png"],
    status: {
      color: "success",
      title: "Completed",
    },
  },
  {
    name: "Sayed Website		",
    date: "24 May 2021	",
    client: "Sayed	",
    price: "$300		",
    avatars: ["/images/team-01.png", "/images/team-02.png"],
    status: {
      color: "error",
      title: "Rejected",
    },
  },
  {
    name: "Arena Application	",
    date: "01 Mar 2021	",
    client: "Arena Company",
    price: "$2600		",
    avatars: [
      "/images/team-01.png",
      "/images/team-02.png",
      "/images/team-03.png",
      "/images/team-04.png",
    ],
    status: {
      color: "success",
      title: "Completed",
    },
  },
]);
</script>

<style scoped></style>

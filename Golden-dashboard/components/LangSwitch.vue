<template>
  <div class="bg-white w-[100px] mr-[100px]">
    <select v-model="language">
      <option
        v-for="item in locales"
        :value="typeof item === 'object' ? item.code : item"
        :key="typeof item === 'object' ? item.code : item"
      >
        {{ typeof item === "object" ? item.name : item }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();
const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<style scoped></style>
<!---

<template>
  <div>
    <button class="py-2 text-dark w-[80px]" @click="toggleLocale">
      {{ currentLocale }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locales, locale, setLocale, defaultLocale } = useI18n();
const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
let lan: any = useCookie("i18n_redirected");
const currentLocale = ref(lan.value === "ar" ? "en" : "ar");
const toggleLocale = () => {
  lan.value = lan.value === "ar" ? "en" : "ar";
  currentLocale.value === lan.value;
  location.reload();
  setLocale(lan.value);
};
</script>

<style scoped></style>
-->

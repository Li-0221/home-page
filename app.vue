<template>
  <el-config-provider :locale="zhCn">
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'bounce', mode: 'out-in' }" />
    </NuxtLayout>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { useGlobalStore } from "./store/global";
// import en from "element-plus/es/locale/lang/en";

const globalStore = useGlobalStore();
const { locale } = useI18n();
onMounted(() => {
  const language = localStorage.getItem("language");
  if (language) {
    globalStore.changeLanguage(language);
    locale.value = language;
  }
});


// TODO 手机屏幕就提示 平板或电脑显示更好
</script>

<style lang="scss">
.bounce-enter-active,
.bounce-leave-active {
  transition: all 0.2s;
}

.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

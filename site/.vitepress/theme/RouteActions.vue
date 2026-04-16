<script setup lang="ts">
import { withBase } from "vitepress";

const props = defineProps<{
  route: string;
  configLink?: string;
}>();

const openRoute = () => {
  window.location.href = props.route;
};

const copyRoute = async () => {
  try {
    await navigator.clipboard.writeText(props.route);
  } catch {
    window.prompt("复制以下 schema", props.route);
  }
};
</script>

<template>
  <div class="route-actions">
    <button class="route-open" type="button" @click="openRoute">
      一键打开
    </button>
    <a v-if="configLink" class="route-config" :href="withBase(configLink)">
      配置
    </a>
    <button class="route-copy" type="button" @click="copyRoute">
      复制 schema
    </button>
  </div>
</template>

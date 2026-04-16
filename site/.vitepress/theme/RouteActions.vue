<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  route: string;
}>();

const encodedRoute = computed(() => encodeURIComponent(props.route));
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
    <button class="route-copy" type="button" :data-route="encodedRoute" @click="copyRoute">
      复制 schema
    </button>
  </div>
</template>

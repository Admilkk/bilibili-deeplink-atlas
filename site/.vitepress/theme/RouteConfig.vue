<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  route: string;
  pathParams?: string[];
  queryParams?: string[];
}>();

const pathValues = ref<Record<string, string>>(
  Object.fromEntries((props.pathParams ?? []).map((key) => [key, ""]))
);

const queryValues = ref<Record<string, string>>(
  Object.fromEntries((props.queryParams ?? []).map((key) => [key, ""]))
);

const finalRoute = computed(() => {
  let value = props.route;
  for (const key of props.pathParams ?? []) {
    value = value.replaceAll(`{${key}}`, encodeURIComponent(pathValues.value[key] ?? ""));
  }

  const params = new URLSearchParams();
  for (const key of props.queryParams ?? []) {
    const current = queryValues.value[key]?.trim();
    if (current) params.set(key, current);
  }

  if ([...params.keys()].length) {
    value += value.includes("?") ? `&${params.toString()}` : `?${params.toString()}`;
  }
  return value;
});

const openRoute = () => {
  window.location.href = finalRoute.value;
};

const copyRoute = async () => {
  try {
    await navigator.clipboard.writeText(finalRoute.value);
  } catch {
    window.prompt("复制以下 schema", finalRoute.value);
  }
};
</script>

<template>
  <div class="route-config-panel">
    <div v-if="(pathParams?.length ?? 0) > 0" class="route-config-group">
      <h3>路径参数</h3>
      <label v-for="key in pathParams" :key="key" class="route-config-field">
        <span>{{ key }}</span>
        <input v-model="pathValues[key]" type="text" :placeholder="`填写 ${key}`" />
      </label>
    </div>

    <div v-if="(queryParams?.length ?? 0) > 0" class="route-config-group">
      <h3>查询参数</h3>
      <label v-for="key in queryParams" :key="key" class="route-config-field">
        <span>{{ key }}</span>
        <input v-model="queryValues[key]" type="text" :placeholder="`填写 ${key}`" />
      </label>
    </div>

    <div class="route-config-result">
      <h3>最终 schema</h3>
      <code>{{ finalRoute }}</code>
    </div>

    <div class="route-actions">
      <button class="route-open" type="button" @click="openRoute">打开</button>
      <button class="route-copy" type="button" @click="copyRoute">复制 schema</button>
    </div>
  </div>
</template>

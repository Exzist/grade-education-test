<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout } from "@/components/logic/layouts/Layout.ts";

export default defineComponent({
  setup() {
    return Layout();
  },
});
</script>

<style scoped></style>

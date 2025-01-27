<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Reviews } from "@/components/logic/views/Reviews";

export default defineComponent({
  setup() {
    return Reviews();
  },
});
</script>

<style scoped></style>

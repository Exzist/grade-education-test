<template>
  <div class="stars">
    <div v-for="i in 5" :key="i" class="star">
      <span
        class="star__polygon"
        :style="{
          background: `linear-gradient(to right, #ffc107 ${calculateStarFill(
            i
          )}%, #fff 0%)`,
        }"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RatingStars } from "@/components/logic/general/RatingStars";

export default defineComponent({
  name: "rating-stars",
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    return RatingStars(props);
  },
});
</script>

<style scoped></style>

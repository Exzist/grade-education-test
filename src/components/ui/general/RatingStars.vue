<template>
  <div class="stars">
    <div v-for="i in 5" :key="i" class="star"></div>
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

<style scoped>
/* .star.full {
  background-color: gold;
}

.star.half {
  background: linear-gradient(to right, gold 50%, #dcdcdc 50%);
}

.star.empty {
  background-color: #dcdcdc;
} */
</style>

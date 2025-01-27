<template>
  <main class="reviews-list">
    <section class="reviews-list__reviews reviews">
      <div class="reviews__container">
        <div class="reviews__wrapper">
          <review-card :review="reviews[0]"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Reviews } from "@/components/logic/views/Reviews";
import ReviewCard from "@/components/ui/cards/ReviewCard.vue";

export default defineComponent({
  name: "reviews",
  components: {
    ReviewCard,
  },
  setup() {
    return Reviews();
  },
});
</script>

<style scoped></style>

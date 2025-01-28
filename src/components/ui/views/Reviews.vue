<template>
  <main class="reviews-list">
    <section class="reviews-list__reviews reviews">
      <div class="reviews__container">
        <div class="reviews__wrapper">
          <!-- There is no need to use v-for, no requirement in task to display list of cards -->
          <review-card :review="reviews[0]"></review-card>

          <!-- This is an example -->
          <review-card :review="reviews[1]">
            <template #title>Different static title</template>
            <template #content>Different static content</template>
          </review-card>
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

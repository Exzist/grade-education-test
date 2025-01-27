<template>
  <div class="review-card">
    <div class="review-card__wrapper">
      <div class="review-card__content">
        <div class="review-card__content-header">
          <img src="/media/svg/google.svg" alt="google logo" />
          <h3 class="review-card__content-title">
            Відгуки наших клієнтів у Google
          </h3>
        </div>
        <div class="review-card__content-review">
          <p class="review-card__content-rate">{{ review?.evaluation }}</p>
          <rating-stars :rating="review?.evaluation" />
          <p class="review-card__content-reviews-number">
            {{ `${review?.reviewsNumber} відгуки` }}
          </p>
        </div>
      </div>
      <div class="review-card__buttons">
        <button class="review-card__button review-card__button_primary">
          Переглянути
        </button>
        <button class="review-card__button review-card__button_secondary">
          Написати
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { ReviewCard } from "@/components/logic/cards/ReviewCard";
import type { Review } from "@/assets/ts/interfaces/Review";
import RatingStars from "@/components/ui/general/RatingStars.vue";

export default defineComponent({
  name: "review-card",
  components: { RatingStars },
  props: {
    review: {
      type: Object as PropType<Review>,
      required: true,
    },
  },
  setup() {
    return ReviewCard();
  },
});
</script>

<style scoped></style>

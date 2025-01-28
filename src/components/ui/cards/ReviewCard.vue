<template>
  <div class="review-card">
    <div class="review-card__wrapper">
      <div class="review-card__content">
        <div class="review-card__content-header">
          <img src="/media/svg/google.svg" alt="google logo" />
          <h3 class="review-card__content-title">
            <slot name="title">{{ translate("reviewsPage.title") }}</slot>
          </h3>
        </div>
        <div class="review-card__content-review">
          <slot name="content">
            <p class="review-card__content-rate">{{ review?.evaluation }}</p>
            <rating-stars :rating="review?.evaluation" />
            <p class="review-card__content-reviews-number">
              {{
                `${review?.reviewsNumber} ${translate("reviewsPage.reviews")}`
              }}
            </p>
          </slot>
        </div>
      </div>
      <div class="review-card__buttons">
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          class="review-card__button review-card__button_primary"
        >
          {{ translate("reviewsPage.checkOut") }}
        </a>
        <button
          @click="changeLocale"
          class="review-card__button review-card__button_secondary"
        >
          {{ translate("reviewsPage.write") }}
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

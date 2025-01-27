import { computed } from "vue";

export function RatingStars(props: { rating: number }) {
  const fullStars = computed(() => Math.floor(props.rating));
  const hasHalfStar = computed(() => props.rating % 1 >= 0.5);

  return { fullStars, hasHalfStar };
}
